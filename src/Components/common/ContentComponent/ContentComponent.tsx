import React, { FC } from 'react';
import { Content } from 'antd/lib/layout/layout';
import { Space } from 'antd';
import './ContentComponent.css'
import ButtonComponent from '@/Components/common/ButtonComponent/ButtonComponent';
import {ContentComponentProps} from "@/Components/common/ContentComponent/ContentComponentProps";

const ContentComponent:FC<ContentComponentProps> = ({setStartQuiz}) => {
    return (
        <Content className={'content'}>
            <Space size={'large'} className={'content__container'}>
                <ButtonComponent onClick={() => setStartQuiz(true)} text={'Начать'}/>
            </Space>
        </Content>
    );
};

export default ContentComponent;