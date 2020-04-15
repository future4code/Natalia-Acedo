const inicialState = {
    taskList: [{
        taskId: Date.now(),
        taskText: "tarefa 1",
        taskDone: false
    }], 
    filter: "todas"
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
                ...state,
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
                ...state,
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
                ...state,
                taskList: newTaskList 
            }
           }
        case "COMPLETE_ALL_TASKS": 
            {const newTaskList = state.taskList.map(task => {
                return {
                ...task,
                taskDone: true
                }
            })
            return {
                ...state,
                taskList: newTaskList 
            }
        }
        case "DELETE_ALL_COMPLETE": {
            {const newTaskList = state.taskList.filter(task => {
                if (task.taskDone) {
                    return false
                }
                return true
            })
            return {
                ...state,
                taskList: newTaskList 
            }
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