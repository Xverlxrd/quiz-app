import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '@/Components/redux/actions/authActions'
import ButtonComponent from '@/Components/common/ButtonComponent/ButtonComponent';
import { login, registration } from '@/Components/redux/actions/authActions';
import './LoginComponent.css'
import InputComponent from '@/Components/common/InputComponent/InputComponent';

const LoginComponent = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();


    const handleAuth = () => {
        dispatch(login(email, password));
        setEmail('')
        setPassword('')
    };
    const handleRegistration = () => {
        dispatch(registration(email, password))
        setEmail('')
        setPassword('')
    }


    return (
        <form className='form__container'>
            <div className='form__inputs_container'>
                <InputComponent
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label='Почта'
                />
                <InputComponent
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Пароль'
                />
            </div>

            <div className='form__btns_container'>
                <ButtonComponent text='Вход' onClick={handleAuth} />
                <ButtonComponent text='Регистрация' onClick={handleRegistration} />
            </div>
        </form>
    );
};

export default LoginComponent;
