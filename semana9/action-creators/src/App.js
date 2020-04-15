import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ToolBar from './components/ToolBar';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>4Task</h1>
        <TaskForm/>
        <TaskList/>
        <ToolBar/>
      </div>
    )
  }
}

export default App