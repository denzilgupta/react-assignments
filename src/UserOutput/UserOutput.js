import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p onClick={props.click}>Hi, my name is {props.name}</p>
            <p>I am learning React.</p>
        </div>
    );
}

export default userOutput;