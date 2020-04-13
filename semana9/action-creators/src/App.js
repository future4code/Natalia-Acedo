import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: [{
        id: Date.now(),
        text: "",
        done: false
      }],
      inputTask: ""
    }
  }

  onChangeTask = (event) => {
    this.setState({ inputTask: event.target.value })
  }

  createTask = () => {
    const newTask = {
      id: Date.now(),
      text: this.state.inputTask,
      done: false
    }
    const taskCopy = [...this.state.task, newTask]

    this.setState({ task: taskCopy, inputTask: "" })
    console.log(this.state.task)
  }




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
                key={eachTask.id}>
                {eachTask.text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App;
