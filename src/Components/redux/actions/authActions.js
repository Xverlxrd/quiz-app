import { SET_AUTH, SET_LOAD, SET_USER } from './actionsTypes/actionsTypes';
import Auth from "@/Service/Auth";
import axios from "axios";
import { URL_API } from "@/http/axios";

export const setAuth = (bool) => ({
    type: SET_AUTH,
    payload: bool,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const isLoading = (load) => ({
    type: SET_LOAD,
    payload: load
})

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await Auth.login(email, password);
        localStorage.setItem('token', res.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(res.data.user));
    } catch (e) {
        console.log(e);
    }
};

export const registration = (email, password) => async (dispatch) => {
    try {
        const res = await Auth.registration(email, password);
        localStorage.setItem('token', res.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(res.data.user));
    } catch (e) {
        console.log(e);
    }
};

export const logout = () => async (dispatch) => {
    try {
        const res = await Auth.logout();
        localStorage.removeItem('token');
        dispatch(setAuth(false));
        dispatch(setUser({}));
    } catch (e) {
        console.log(e);
    }
};

export const authUser = () => async (dispatch) => {
    try {
        dispatch(isLoading(true))
        const res = await axios.get(`${URL_API}/refresh`, {withCredentials: true})
        localStorage.setItem('token', res.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(res.data.user));
    } catch (e) {
        console.log(e);
    }
    finally {
        dispatch(isLoading(false))
    }
};