// actions.js
import { SET_AUTH, SET_USER } from './actionsTypes/actionsTypes';
import Auth from "@/Service/Auth";

export const setAuth = (bool) => ({
    type: SET_AUTH,
    payload: bool,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await Auth.login(email, password);
        console.log(res)
        localStorage.setItem('token', res.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(res.data.user));
    } catch (e) {
        console.log(e);
    }
};
