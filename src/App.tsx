import React from 'react';
import {Layout} from 'antd';
import HeaderComponent from '@/Components/common/HeaderComponent/HeaderComponent';
import ContentComponent from '@/Components/common/ContentComponent/ContentComponent';

const App = () => {
    return (
        <Layout>
            <HeaderComponent/>
            <ContentComponent/>
        </Layout>
    );
};

export default App;