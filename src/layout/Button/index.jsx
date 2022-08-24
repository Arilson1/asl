import React from "react";

import './button.css';

const Button = (props) => {
    return (
        <div className="button">
            <button onClick={props.clickBtn}>{props.name}</button>
        </div>
    )
}

export default Button;