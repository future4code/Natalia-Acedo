import axios from "axios"

export const setTasks = (task) => {
    return {
        type: "SET_TASKS",
        payload: {
            task
        }
    }
}

export const getTasks = () => async (dispatch) => {
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-natalia-acedo"
    )
    dispatch(setTasks(response.data))
}

export const createTask = (text, day) => async () => {
    const body = {
        text,
        day
    }
    await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-natalia-acedo",
        body
    )
}