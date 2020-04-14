const inicialState = {
    taskList: []
}

const tasks = (state = inicialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {...state, taskList:[action.paylod, ...state.taskList]}
        case "COMPLETE_TASK":
            return {...state, taskDone: action.paylod.taskDone}
        case "INCOMPLETE_TASK":
            return {...state, taskDone: action.paylod.taskDone}
        default:
            return state

    }
}

export default tasks