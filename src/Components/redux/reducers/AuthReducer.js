// authReducer.js
import { SET_AUTH, SET_USER } from '../actions/actionsTypes/actionsTypes';

const initialState = {
    user: {},
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isAuth: action.payload };
        case SET_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default authReducer;
