import React from 'react'
import { connect } from 'react-redux'
import { toggleTask, deleteTask } from '../actions/actionsTask'

class TaskList extends React.Component {
  render() {
    console.log(this.props.taskList)
    return (
      <ul>
        {this.props.taskList.filter((task) => {
          const filter = this.props.filter
          if(filter === "pendentes") {
            return task.taskDone === false
          }
          if(filter === "completas") {
            return task.taskDone === true
          }
          return true
        }).map(task =>
          <li
            key={task.taskId}
            onClick={() => this.props.toggleTask(task.taskId)}>
            {task.taskText} - Completas: {String(task.taskDone)}
            <button onClick={() => this.props.deleteTask(task.taskId)}>Deletar</button>
          </li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    taskList: state.tasks.taskList,
    filter: state.tasks.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTask: (taskId) => dispatch(toggleTask(taskId)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)