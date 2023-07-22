import React, { FC } from 'react';
import { Button } from 'antd';
import './ButtonComponent.css'
import { ButtonComponentProps } from '@/Components/common/ButtonComponent/ButtonComponentProps';

const ButtonComponent:FC<ButtonComponentProps> = ({text, onClick, disabled}) => {
    return (
        <Button onClick={onClick} disabled={disabled} className={'custom__button'}>
            {text}
        </Button>
    );
};

export default ButtonComponent;