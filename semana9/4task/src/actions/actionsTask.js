//Adiciona tarefa
export const addTask = (taskText) => {
    return {
        type: 'ADD_TASK',
        payload: {
            taskText
        }
    }
}

//Toggle tarefa
export const toggleTask = (taskId) => {
    return {
        type: 'TOGGLE_TASK',
        payload: {
            taskId
        }
    }
}

//Apagar uma tarefa 
export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK',
        payload: {
            taskId
        }
    }
}

// Marcar todas como completas 
export const completeAllTasks = () => {
    return {
        type: 'COMPLETE_ALL_TASKS'
    }
}

//Remover as tarefas completas
export const deleteAllComplete = () => {
    return {
        type: 'DELETE_ALL_COMPLETE'
    }
}

//Filtrar tarefas 
export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: {
            filter
        }
    }
}