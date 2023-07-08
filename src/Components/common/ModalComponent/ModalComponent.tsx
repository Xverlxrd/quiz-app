import React, { FC } from 'react';
import './ModalComponent.css'
import { ModalComponentProps } from '@/Components/common/ModalComponent/ModalComponentProps';

const ModalComponent:FC<ModalComponentProps> = ({active, setActive, children}) => {
    return (
        <div onClick={() => setActive(false)} className={active ? 'modal active' : 'modal'}>
            <div className={'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalComponent;