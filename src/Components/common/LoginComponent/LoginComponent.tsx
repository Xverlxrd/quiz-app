import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '@/Components/redux/actions/authActions.js'
import ButtonComponent from '@/Components/common/ButtonComponent/ButtonComponent';
import {login} from "@/Components/redux/actions/authActions";

const LoginComponent = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    const handleAuthClick = () => {
        dispatch(login(email, password));
    };

    return (
        <div>
            <input
                type="email"
                placeholder="zxc@mail.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonComponent text={'Auth'} onClick={handleAuthClick} />
            <ButtonComponent text={'Reg'} />
        </div>
    );
};

export default LoginComponent;
