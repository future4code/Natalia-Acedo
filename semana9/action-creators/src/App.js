import React from 'react';
import { connect } from "react-redux";
import {addTask} from "./actions"

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: [{
        taskId: Date.now(),
        taskText: "",
        taskDone: false
      }],
      inputTask: ""
    }
  }

  onChangeTask = (event) => {

    this.setState({ inputTask: event.target.value })
  }

  /* createTask = () => {
    const newTask = {
      taskId: Date.now(),
      taskText: this.state.inputTask,
      taskDone: false
    }
    const taskCopy = [...this.state.task, newTask]

    this.setState({ task: taskCopy, inputTask: "" })
    console.log(this.state.task)
  } */




  render() {
    return (
      <div>
        <h1>4Task</h1>
        <input
          placeholder="O que tem que ser feito?"
          value={this.state.inputTask}
          onChange={this.onChangeTask}></input>
        <button onClick={this.createTask}>Adicionar tarefa</button>
        <ul>
          {this.state.task.map(eachTask => {
            return (
              <li
                key={eachTask.taskId}>
                {eachTask.taskText}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    taskText: state.tasks.taskList
  }

export default connect(
  mapStateToProps
)(App);