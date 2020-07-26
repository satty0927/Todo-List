import React from 'react';
import Dropdown from './DropDownInput';
import TaskInput from './AddTaskInput';
import axios from 'axios';
const keys = require('./Keys.json');

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownSelectedOption: "",
            selectedTableData: {
                tableName: "",
                tableID: "",
                key: ""
            },
            currentTableTasks: [],
            task: {
                key: "",
                value: ""
            }
        }
        this.getCurrentSelectedOption = this.getCurrentSelectedOption.bind(this);
        this.updateCurrentTableTasks = this.updateCurrentTableTasks.bind(this);
    }
    //Get current selected option.
    getCurrentSelectedOption(value) {
        var url = keys.baseAddress + "/" + keys.mainEndpoint;
        var headers = keys.getHeaders;
        axios.get(url, { headers })
            .then((res) => {
                var fetchedResponse = res.data;
                var len = fetchedResponse.length;
                for (var i = 0; i < len; i++) {
                    if (fetchedResponse[i].tableName === value) {
                        this.setState({
                            selectedTableData: {
                                tableName: fetchedResponse[i].tableName,
                                tableID: fetchedResponse[i].tableID,
                                key: fetchedResponse[i].key
                            }
                        })
                    }
                }
                //After getting the current selected option get the data from that table
                url = keys.baseAddress + "/" + this.state.selectedTableData.tableID;
                axios.get(url, { headers })
                    .then((res) => {
                        var fetchedTasks = res.data;
                        var tasksLength = fetchedTasks.length;
                        for (var i = 0; i < tasksLength; i++) {
                            this.setState({
                                task: {
                                    key: fetchedTasks[i].key,
                                    value: fetchedTasks[i].value
                                }
                            })
                            this.setState({
                                currentTableTasks: fetchedTasks
                            })
                            this.props.stateUpdator(this.state.currentTableTasks);
                        }
                    })
            })
    }

    updateCurrentTableTasks(value) {
        var updatedTasks = JSON.parse(value)
        if (updatedTasks.length === 0) {
            var url = keys.baseAddress + "/" + this.state.selectedTableData.tableID;
            var headers = keys.deleteHeaders;
            axios.delete(url, { headers });
            //Update main table
            url = keys.baseAddress + "/" + keys.mainEndpoint;
            headers = keys.getHeaders;
            axios.get(url, { headers }).then((res) => {
                var mainTable = res.data;
                var tableID = this.state.selectedTableData.tableID;
                var filterTable = mainTable.filter((fil) => fil.tableID !== tableID);
                headers = keys.putHeaders;
                axios.put(url, filterTable, { headers });
            })

        }
        else {
            //Push the update to the specified table.
            url = keys.baseAddress + "/" + this.state.selectedTableData.tableID;
            headers = keys.putHeaders;
            axios.put(url, updatedTasks, { headers })
                .then((res) => {
                    headers = keys.getHeaders;
                    axios.get(url, { headers })
                        .then((res) => {
                            var fetchedData = res.data;
                            this.setState({
                                currentTableTasks: fetchedData
                            })
                            this.props.stateUpdator(this.state.currentTableTasks);
                            this.refs.DropdownComponent.getData();
                        })
                })
        }
    }

    render() {
        return (
            <div id="inputParent">
                <Dropdown selectedOption={this.getCurrentSelectedOption} ref="DropdownComponent" />
                <TaskInput activeTable={this.state.selectedTableData} tasks={this.state.currentTableTasks} updateTableState={this.updateCurrentTableTasks} />
            </div>
        )
    }
}

export default Input;