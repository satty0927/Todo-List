import React from 'react';
import './css/InputStyles.css';
import ListItem from './ListItem';
import Input from './Input';
const axios = require('axios');

class ToDoItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    }
    this.updateStateTaskList = this.updateStateTaskList.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  //This method will update state TaskList.
  updateStateTaskList(value) {
    var valueToUpdate = JSON.parse(JSON.stringify(value));
    this.setState({
      taskList: valueToUpdate
    })
  }

  //This method would delete task.
  deleteTask(key) {
    console.log("TasksList Delete Task");
    var intialList = this.state.taskList;
    var filteredList = intialList.filter(val => val.key !== key);
    this.refs.child.updateCurrentTableTasks(JSON.stringify(filteredList));
    this.setState({
      taskList: filteredList
    })
  }

  render() {
    return (
      <div>
        <div className="InputParent">
          <Input stateUpdator={this.updateStateTaskList} ref="child" />
        </div>
        <div className="App">
          <ListItem id="listItem" passedTask={this.state.taskList} deleteTasks={this.deleteTask} />
        </div>
      </div>
    )
  }
}

export default ToDoItems;