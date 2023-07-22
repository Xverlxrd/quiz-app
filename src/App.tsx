import React, {FC, useEffect, useState} from 'react';
import {Layout} from 'antd';
import HeaderComponent from '@/Components/common/HeaderComponent/HeaderComponent';
import ContentComponent from '@/Components/common/ContentComponent/ContentComponent';
import GameComponent from '@/Components/common/GameComponent/GameComponent';
import LoginComponent from '@/Components/common/LoginComponent/LoginComponent';
import {useDispatch, useSelector} from 'react-redux';
import {authUser, logout} from '@/Components/redux/actions/authActions';
import ButtonComponent from '@/Components/common/ButtonComponent/ButtonComponent';
import ModalComponent from '@/Components/common/ModalComponent/ModalComponent';
import '@/Components/styles/App.css'

interface RootState {
    auth: {
        isAuth: boolean;
        user: object;
        isLoading: boolean
    }
}

const App: FC = () => {
    const [startQuiz, setStartQuiz] = useState<boolean>(false)
    const [loginModal, setLoginModal] = useState<boolean>(false)

    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    const isLoad = useSelector((state: RootState) => state.auth.isLoading)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        setStartQuiz(false)
        setLoginModal(false)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(authUser())
        }
    }, [])

    if (startQuiz) {
        return (
            <Layout>
                <HeaderComponent/>
                <GameComponent/>
                {isAuth && (
                    <div className='logout'>
                        <ButtonComponent onClick={handleLogout} text='Выйти'/>
                    </div>
                )}
            </Layout>
        )
    }
    return (
        <Layout>
            <HeaderComponent/>
                {isAuth ? (
                    <>
                        <ContentComponent setStartQuiz={setStartQuiz}/>
                        <div className='logout'>
                            <ButtonComponent onClick={handleLogout} text='Выйти'/>
                        </div>
                    </>
                ) : (
                    <div className='container__main'>
                        <ButtonComponent onClick={setLoginModal} text='Войти'/>
                        <ModalComponent active={loginModal} setActive={setLoginModal}>
                            <LoginComponent/>
                        </ModalComponent>
                    </div>
                )}
        </Layout>
    );
};

export default App;