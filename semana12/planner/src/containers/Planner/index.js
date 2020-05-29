import React from "react";
import { connect } from "react-redux";
import { getTasks, createTask } from "../../actions/tasks";

export class Planner extends React.Component {
  state = {
    day: "",
    text: ""
  }

  componentDidMount() {
    if (this.props.getTasks) {
      this.props.getTasks();
    }
  }

  handleInputTask = (e) => {
    this.setState({ text: e.target.value })
  }


  handleSelectDay = (e) => {
    this.setState({ day: e.target.value })
  }

  handleSendTask = (e) => {
    e.preventDefault()
    this.props.createTask(this.state.text, this.state.day)
    this.setState({day:"", text:""})
    this.props.getTasks()
  }

  render() {
    return <div>
      <h1>Weekly Planner</h1>
      <form onSubmit={this.handleSendTask}>
        <label htmlFor="newTask">Create new task</label>
        <input name="newTask" placeholder="Type a task" value={this.state.text} onChange={this.handleInputTask}/>
        <select onChange={this.handleSelectDay}>
          <option>Choose a day</option>
          <option value="monday">Mondar</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
        <button type="submit">Send</button>
      </form>
      <section>
        {this.props.tasks &&
        this.props.tasks.map(task => {
        return <ul key={task.id}>{task.day}
          <li>{task.text}</li>
        </ul>
        })}
      </section>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.allTasks
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
  createTask: (text, day) => dispatch(createTask(text, day))
});


export default connect(mapStateToProps, mapDispatchToProps)(Planner);
