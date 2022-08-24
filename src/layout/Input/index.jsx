import React from "react";

import './input.css';

const Input = (props) => {
    return (
        <div className="input">
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.change}
             />
        </div>
    )
}

export default Input;
