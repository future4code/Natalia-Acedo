//1. Adicionar tarefa
export function addTask(newTask) {
    return {
        type: 'ADD_TASK',
        payload: {
            newTask:[{
                taskId:Date.now(),
                taskText:"",
                taskDone: false
              }]
        }
    }
}


//2. Marcar tarefas como completas
export function completeTask(taskId) {
    return {
        type: 'COMPLETE_TASK',
        payload: {
          taskId: taskId
        }
    }
 }


 //3. Marcar tarefa como incompleta
 export function incompleteTask(taskId) {
    return {
        type: 'INCOMPLETE_TASK',
        payload: {
          taskId: taskId
        }
    }
 }


//4. Remover tarefa
export function removeTask(taskId) {
    return {
        type: 'REMOVE_TASK',
        payload: {
          taskId: taskId
        }
    }
 }

 
 //5. Marcar todas as tarefas como feitas
 export function completeAllTasks(taskList) {
    return {
        type: 'COMPLETE_ALL_TASKS',
        payload: {
          taskList: []
        }
    }
}


 //6. Deletar todas as tarefas 
 export function deleteAllTasks(taskList) {
    return {
        type: 'DELETE_ALL_TASKS',
        payload: {
          taskList: []
        }
    }
}


//7. Ver tarefas pendentes
export function toDoTasks(taskDone) {
    return {
        type: 'TO_DO_TASK',
        payload: {
            taskDone: false
        }
    }
 }


//8. Ver tarefas completas
export function DoneTasks(taskDone) {
    return {
        type: 'DONE_TASK',
        payload: {
            taskDone: true
        }
    }
 }