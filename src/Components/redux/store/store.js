import { createStore, combineReducers } from 'redux';
import paginationReducer from '../reducers/PaginationReducer';

const rootReducer = combineReducers({
    pagination: paginationReducer,
});

const store = createStore(rootReducer);

export default store;