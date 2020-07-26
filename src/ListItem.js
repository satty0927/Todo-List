import React from 'react';
import './css/ListItem.css';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    //Delete Item



    render() {
        const items = this.props.passedTask;
        const listDiv = items.map(item => {
            return <div className="listItem" key={item.key}>
                <link
                    rel="stylesheet"
                    href="https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css"
                />
                <p>
                    <input id={item.key} value={item.value} onChange={(e) => {
                        this.props.setUpdate(e.target.value, item.key)
                    }}></input><span className="mdi mdi-delete delIcon" onClick={() => this.props.deleteTasks(item.key)}></span></p>
            </div>
        })
        return (<div>
            {listDiv}
        </div>)
    }
}

export default ListItem;