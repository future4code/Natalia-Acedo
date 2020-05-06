import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router/";
import { setLoading } from "./global";


const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/fourEddit"

export const setAllPosts = (post) => {
    return {
        type: "SET_ALL_POSTS",
        payload: {
            post
        }
    }
}

export const setPostDetails = (comment) => {
    return {
        type: "SET_POST_DETAILS",
        payload: {
            comment
        }
    }
}

export const getPosts = () => async (dispatch) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.get(
            `${baseUrl}/posts`,
            {
                headers: {
                    auth: token
                }
            }
        )
        dispatch(setAllPosts(response.data.posts))
    } catch (error) {
        console.error(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    const token = localStorage.getItem("token")
    try {
        dispatch(setLoading(true))
        await axios.post(
            `${baseUrl}/posts`, post, {
            headers: {
                auth: token
            }
        }
        )
        dispatch(getPosts())
        dispatch(setLoading(false))

    } catch (error) {
        console.error(error)
    }
}

export const vote = (direction, postId) => async (dispatch) => {
    const token = localStorage.getItem("token")
    const body = {
        direction
    }
    try {
        await axios.put(
            `${baseUrl}/posts/${postId}/vote`, body, {
            headers: {
                auth: token
            }
        }
        )
        dispatch(getPosts())
    } catch (error) {
        console.error(error)
    }
}

export const getPostDetails = (postId) => async (dispatch) => {
    const token = localStorage.getItem("token")
    try {
        dispatch(setLoading(true))
        const response = await axios.get(
            `${baseUrl}/posts/${postId}`, {
            headers: {
                auth: token
            }
        }
        )
        dispatch(setPostDetails(response.data.post))
        dispatch(push(routes.details.replace(":id", postId)))
        dispatch(setLoading(false))
    } catch (error) {
        console.error(error)
    }
}

export const createComment = (text, postId) => async (dispatch) => {
    const token = localStorage.getItem("token")

    const body = {
        text
    }

    try {
        dispatch(setLoading(true))
        await axios.post(
            `${baseUrl}/posts/${postId}/comment`,
            body, {
            headers: {
                auth: token
            }
        }
        )
        dispatch(getPostDetails(postId))
        dispatch(setLoading(false))

    } catch (error) {
        console.error(error)
    }
}

export const voteComment = (direction, commentId, postId) => async (dispatch) => {
    const token = localStorage.getItem("token")

    const body = {
        direction
    }

    try {
        await axios.put(
        `${baseUrl}/posts/${postId}/comment/${commentId}/vote`, body, {
            headers: {
                auth: token
            }
        }
        )
        dispatch(getPostDetails(postId))
    } catch (error) {
        console.error(error)
    }
}
