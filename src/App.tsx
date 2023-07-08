import React, {useState} from 'react';
import {Layout} from 'antd';
import HeaderComponent from '@/Components/common/HeaderComponent/HeaderComponent';
import ContentComponent from '@/Components/common/ContentComponent/ContentComponent';
import GameComponent from "@/Components/common/GameComponent/GameComponent";

const App = () => {
    const [startQuiz, setStartQuiz] = useState<boolean>(false)
    return (
        <Layout>
            <HeaderComponent/>
            {!startQuiz ?
                (
                    <ContentComponent setStartQuiz={setStartQuiz}/>
                )
                :
                (
                    <GameComponent/>
                )
            }
        </Layout>
    );
};

export default App;