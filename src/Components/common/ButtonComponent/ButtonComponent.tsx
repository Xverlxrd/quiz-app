import React, {FC} from 'react';
import {Button} from 'antd';
import './ButtonComponent.css'
import {ButtonComponentProps} from '@/Components/common/ButtonComponent/ButtonComponentProps';

const ButtonComponent:FC<ButtonComponentProps> = ({text, onClick}) => {
    return (
        <Button onClick={onClick} className={'custom__button'}>
            {text}
        </Button>
    );
};

export default ButtonComponent;