import React from "react";

import './title.css';

const Title = (props) => {
    return (
        <div className="title">
            <p>{props.title}</p>
        </div>
    )
}

export default Title;