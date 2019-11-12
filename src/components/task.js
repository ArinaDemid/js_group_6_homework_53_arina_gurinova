import React from "react";

const Task = props => {
    return (
        <div className='task'>
            <p className='descriptionTask'>{props.description}</p>
            <p className='id'>{props.id}</p>
            <p onClick={props.done}>{props.children[0]}</p>
            <p onClick={props.remove}>{props.children[1]}</p>
        </div>
    )
};

export default Task;