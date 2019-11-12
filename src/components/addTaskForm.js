import React, { Component } from "react";

class AddTaskForm extends Component {

    render() {
        return (
            <div className="taskForm">
                <form onSubmit={this.props.submit}>
                    <input placeholder="Add new task" onChange={this.props.addTask}></input>
                    <button className='btn' type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default AddTaskForm;