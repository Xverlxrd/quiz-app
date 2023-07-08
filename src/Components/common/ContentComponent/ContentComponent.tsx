import React, {useState} from 'react';
import {Content} from 'antd/lib/layout/layout';
import {Space} from 'antd';
import './ContentComponent.css'
import ButtonComponent from '@/Components/common/ButtonComponent/ButtonComponent';

const ContentComponent = ({setStartQuiz}) => {
    return (
        <Content className={'content'}>
            <Space size={'large'} className={'content__container'}>
                <ButtonComponent onClick={() => setStartQuiz(true)} text={'Начать'}/>
                <ButtonComponent text={'Рекорд'}/>
            </Space>
        </Content>
    );
};

export default ContentComponent;