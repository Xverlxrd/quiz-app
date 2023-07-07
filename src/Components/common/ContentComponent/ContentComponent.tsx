import React, {useState} from 'react';
import {Content} from 'antd/lib/layout/layout';
import {Space} from 'antd';
import './ContentComponent.css'
import ButtonComponent from '@/Components/common/ButtonComponent/ButtonComponent';
import ModalComponent from '@/Components/common/ModalComponent/ModalComponent';

const ContentComponent = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <Content className={'content'}>
            <Space size={'large'} className={'content__container'}>
                <ButtonComponent  text={'Начать'}/>
                <ButtonComponent onClick={() => setModalActive(true)} text={'Рекорд'}/>
            </Space>
            <ModalComponent active={modalActive} setActive={setModalActive}>
                <div>1</div>
            </ModalComponent>
        </Content>
    );
};

export default ContentComponent;