import React from "react";

const Task = props => {
    return (
        <div className='task'>
            <p className='descriptionTask'>{props.description}</p>
            <p className='id'>{props.id}</p>
            <p onClick={props.remove}>{props.children}</p>
        </div>
    )
};

export default Task;