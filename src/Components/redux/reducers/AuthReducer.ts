import { SET_AUTH, SET_LOAD, SET_USER } from '../actions/actionsTypes/actionsTypes';


const initialState = {
    user: {},
    isAuth: localStorage.getItem('isAuth') === 'true',
    isLoading: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            localStorage.setItem('isAuth', action.payload);
            return {...state, isAuth: action.payload};
        case SET_USER:
            return {...state, user: action.payload};
        case SET_LOAD:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
};

export default authReducer;
