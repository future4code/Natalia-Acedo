const initialState = {
    posts: [],
    post: null,
    isLoading: false
}

const posts = (state = initialState, action) => {
    switch(action.type) {
        case "SET_ALL_POSTS": {
            return {...state, posts: action.payload.post}
        }
        case "SET_POST_DETAILS": {
            return {...state, post: action.payload.comment}
        }
        case "SET_LOADING": {
            return {...state, isLoading: action.payload.loading}
        }
        default:
            return state
    }
}

export default posts
