import React from "react";
import { connect } from "react-redux";
import { getTasks, createTask } from "../../actions/tasks";

class Planner extends React.Component {
  state = {
    day: ""
  }

  componentDidMount() {
    if (this.props.getTasks) {
      this.props.getTasks();
    }
  }



  handleSelectDay = (e) => {
    this.setState({ day: e.target.value })
  }

  render() {
    return <div>
      <h1>Weekly Planner</h1>
      <section>
        <input placeholder="Type a task" />
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
        <button>Send</button>
      </section>
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
