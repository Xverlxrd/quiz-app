import React, { FC, useState } from 'react';
import { Layout } from 'antd';
import HeaderComponent from '@/Components/common/HeaderComponent/HeaderComponent';
import ContentComponent from '@/Components/common/ContentComponent/ContentComponent';
import GameComponent from '@/Components/common/GameComponent/GameComponent';
import LoginComponent from "@/Components/common/LoginComponent/LoginComponent";

const App:FC = () => {
    const [startQuiz, setStartQuiz] = useState<boolean>(false)
    return (
        <Layout>
            <HeaderComponent/>
            {!startQuiz
                ?
                (<ContentComponent setStartQuiz={setStartQuiz}/>)
                :
                (<GameComponent/>)
            }
            <LoginComponent/>
        </Layout>
    );
};

export default App;