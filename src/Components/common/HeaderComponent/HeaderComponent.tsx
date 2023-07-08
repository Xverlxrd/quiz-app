import React, { FC } from 'react';
import { Header } from 'antd/lib/layout/layout';
import './HeaderComponent.css';
import { Space } from 'antd';
import { Icon } from '@iconify/react';

const HeaderComponent:FC = () => {
    return (
        <Header className='header'>
            <Space className='header__container' align='center' size='large'>
                <Icon className='header__img' icon='mdi:react' color='#00d8ff' />
                <h3 className={'header__title'}>react quiz</h3>
            </Space>
        </Header>
    );
};

export default HeaderComponent;