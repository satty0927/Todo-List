import React from 'react';
import './css/DropDown.css';
const keys = require('./Keys.json');
const axios = require('axios');
const baseAddress = keys.baseAddress;
const mainEndpoint = keys.mainEndpoint;

class DropDownInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownDisplay: "block",
            inputDisplay: "none",
            dropDownSelectedOption: this.props.selectedOption,
            dropdownOptions: [],
            textboxValue: "",
            currentItems: {
                tableName: "",
                tableID: "",
                key: ""
            }
        }
        this.getData = this.getData.bind(this);
        this.addNewTable = this.addNewTable.bind(this);
        this.updateState = this.updateState.bind(this);
        this.uploadTextToApi = this.uploadTextToApi.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    async componentDidMount() {
        this.getData();
    }
    //Method to GET data from axios to a state = dropdownOptions.
    getData() {
        var url = baseAddress + "/" + mainEndpoint;
        var headers = keys.getHeaders;
        axios.get(url, { headers })
            .then((res) => {
                const fetchedData = res.data;
                const len = fetchedData.length;
                for (var i = 0; i < len; i++) {
                    this.setState({
                        currentItems: {
                            tableName: fetchedData[i].tableName,
                            tableID: fetchedData[i].tableID,
                            key: fetchedData[i].key
                        },
                    })
                    var tempData = this.state.dropdownOptions;
                    tempData = [...tempData, this.state.currentItems];
                    this.setState({
                        dropdownOptions: tempData,
                    })
                }
            });
    }
    //Handle switching and stuff.
    addNewTable() {
        this.setState({
            dropDownDisplay: "none",
            inputDisplay: "block"
        })
    }
    //Update value from textbox to a state.
    updateState(e) {
        this.setState({
            textboxValue: e.target.value
        })
    }
    //Update set text to api and state.
    uploadTextToApi(e) {
        e.preventDefault();
        //As soon as the button is clicked create a new table.
        var url = keys.baseAddress;
        var headers = keys.postHeaders;
        headers.name = "Task_" + this.state.textboxValue;
        const demoData = JSON.stringify([{ key: "DemoKey", value: "DemoValue" }]);
        axios.post(url, demoData, { headers })
            .then((res) => {
                const ID = res.data.id;
                this.setState({
                    currentItems: {
                        tableName: this.state.textboxValue,
                        tableID: ID,
                        key: Date.now()
                    }
                })
                var tempDataToPut = JSON.stringify([...this.state.dropdownOptions, this.state.currentItems]);
                var selectDropdownOption = this.state.currentItems.tableName;
                url = keys.baseAddress + "/" + keys.mainEndpoint;
                headers = keys.putHeaders;
                axios.put(url, tempDataToPut, { headers })
                    .then((res) => {
                        console.log("Primary table updated.");
                        var selectedTable = this.state.currentItems.tableName;
                        this.props.selectedOption(selectedTable);
                    })
                this.setState({
                    dropdownOptions: JSON.parse(tempDataToPut),
                    dropDownSelectedOption: selectDropdownOption
                })
            });
        //Return to the dropdown.
        this.setState({
            dropDownDisplay: "block",
            inputDisplay: "none"
        })
    }
    //Handles change in dropdown.
    handleDropdownChange(e) {
        this.setState({
            dropDownSelectedOption: e.target.value
        })
        this.props.selectedOption(e.target.value);
    }

    render() {
        var data = this.state.dropdownOptions;
        var optionElements = data.map((item) => {
            return <option key={item.key}>{item.tableName}</option>
        })
        return (<div id="major">
            <div id="dropdownDiv" style={{ display: this.state.dropDownDisplay }}>
                <select name="dropdown" id="dropdown" value={this.state.dropDownSelectedOption} onChange={this.handleDropdownChange}>
                    {optionElements}
                </select>
                <button onClick={this.addNewTable}>ADD NEW</button>
            </div>
            <div id="inputDiv" style={{ display: this.state.inputDisplay }}>
                <form onSubmit={this.uploadTextToApi}>
                    <input type="text" id="inputBox" placeholder="Add new task??" onChange={this.updateState}></input>
                    <button>ADD</button>
                </form>
            </div>
        </div>)
    }
}

export default DropDownInput;