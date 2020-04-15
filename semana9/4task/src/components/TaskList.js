import React from 'react'
import { connect } from 'react-redux'
import { toggleTask, deleteTask, fetchTasks } from '../actions/actionsTask'

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return (
      <ul>
        {this.props.taskList.filter((task) => {
          const filter = this.props.filter
          if (filter === "pendentes") {
            return task.done === false
          }
          if (filter === "completas") {
            return task.done === true
          }
          return true
        }).map((task) => {
          return <li onClick={() => this.props.toggleTask(task.id)} key={task.id}>
            {task.text}  - Completas: {String(task.done)}
            <button onClick={() => this.props.deleteTask(task.id)}>Deletar</button>
          </li>
        })}
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
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)