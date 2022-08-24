import React from "react";

import * as FaIcon from "react-icons/fa";

import './saldo.css';

const Saldo = (props) => {
    return(
        <div className="saldo">
            <p><FaIcon.FaRegMoneyBillAlt size={40} /> R${props.saldo} </p>
        </div>
    )
}

export default Saldo;