import React, { FC } from 'react';
import './InputComponent.css'

interface InputProps {
    placeholder?: string
    type: string
    value: string
    onChange: any
    label?: string
}
const InputComponent:FC<InputProps> = ({placeholder, onChange, value, label, type}) => {
    return (
        <div className='input__container'>
            <span className='input__label'>{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='myinput' />
        </div>
    );
};

export default InputComponent;