import React from "react";

import './saque.css';

import Title from "../../layout/Title";
import Input from "../../layout/Input";
import Button from "../../layout/Button";


const Saque = (props) => {
    return (
        <div className="saque">
            <Title title='Digite o valor do saque:' />
            <Input
                type='number'
                name='saque'
                placeholder='Digite o valor do saque...'
                change={props.click}
            />
            <Button name='Continuar' />
        </div>
    )
}

export default Saque;