import React from 'react';
import './css/AddTaskInput.css';

class InputTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textboxValue: "",
            currentTask: {
                key: "",
                value: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    //Update state with updated text value.
    handleChange(e) {
        this.setState({
            textboxValue: e.target.value
        })
        this.setState({
            currentTask: {
                key: Date.now(),
                value: e.target.value
            }
        })
    }

    addTask(e) {
        e.preventDefault();
        //When submitted get the text value and update to a key-value pair and invoke a update state method.
        var tempTaskList = [...this.props.tasks, this.state.currentTask];
        this.props.updateTableState(JSON.stringify(tempTaskList));
        this.setState({
            textboxValue: ""
        })
    }

    render() {
        return (
            <div className="InputTaskParent">
                <header>
                    <form id="to-do-form" onSubmit={this.addTask}>
                        <hr></hr>
                        <input type="text" placeholder="Tasks to do.." value={this.state.textboxValue} onChange={this.handleChange}></input>
                        <button>TODO</button>
                    </form>
                </header>
            </div>
        )
    }
}

export default InputTask;