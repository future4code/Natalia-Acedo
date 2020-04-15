const inicialState = {
    taskList: [{
        taskId: Date.now(),
        taskText: "tarefa 1",
        taskDone: false
    }]
}

const tasks = (state = inicialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const newTask = {
                taskId: Date.now(),
                taskText: action.payload.taskText,
                taskDone: false
            }
            return {   
                taskList: [newTask, ...state.taskList]
            }

        case "TOGGLE_TASK":   
            {const newTaskList = state.taskList.map(task => {
                if(task.taskId === action.payload.taskId) {
                    return {
                        ...task,
                        taskDone: !task.taskDone
                    }
                }
                return task
            })
            return {
                taskList: newTaskList 
            }
           }
        case "DELETE_TASK":
            {const newTaskList = state.taskList.filter(task => {
                if (task.taskId === action.payload.taskId) {
                    return false
                }
                return true
            })
            return {
                taskList: newTaskList 
            }
           }

        default: 
            return state
    }
}

export default tasks