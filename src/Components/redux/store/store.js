import { createStore, combineReducers, applyMiddleware } from 'redux';
import paginationReducer from '../reducers/PaginationReducer';
import authReducer from "@/Components/redux/reducers/AuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    pagination: paginationReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;