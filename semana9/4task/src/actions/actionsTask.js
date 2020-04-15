import axios from 'axios'


//Ações síncronas


// Marcar todas como completas 
export const completeAllTasks = () => {
    return {
        type: 'COMPLETE_ALL_TASKS'
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

//Mostrar tarefas
export const setTasks = (taskList) => {
    return {
      type: "SET_TASKS",
      payload: {
        taskList
      }
    };
  };



//Ações assíncronas 

export const fetchTasks = () => async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/natalia/todos")

    console.log(response.data.todos)
    dispatch(setTasks(response.data.todos))
}

export const createTask = (taskText) => async (dispatch, getState) => {
    const body = {
        text: taskText
    }
    const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/natalia/todos", body)

    dispatch(fetchTasks())
}

export const toggleTask = (taskId) => async (dispatch, getState) => {
    const response = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/natalia/todos/${taskId}/toggle`)
}  

export const deleteTask = (taskId) => async (dispatch, getState) => {
    const response = await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/natalia/todos/${taskId}`)
}  

export const deleteAllComplete = () => async (dispatch, getState) => {
    const response = await axios.delete("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/natalia/todos/delete-done")
}  