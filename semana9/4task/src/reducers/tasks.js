const inicialState = {
    taskList: [], 
    filter: "todas"
}

const tasks = (state = inicialState, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return { ...state, taskList: action.payload.taskList}

        case "COMPLETE_ALL_TASKS": 
            {const newTaskList = state.taskList.map(task => {
                return {
                ...task,
                done: true
                }
            })
            return {
                ...state,
                taskList: newTaskList 
            }
        }

        case "SET_FILTER": {
            return {
                ...state,
                filter: action.payload.filter
            }
        }

        default: 
            return state
    }
}

export default tasks