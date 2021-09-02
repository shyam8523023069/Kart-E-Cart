import { applyMiddleware, createStore, compose } from 'redux';
import data from '../Data/data';
import thunk from 'redux-thunk';

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

const initialState = {};
const reducer = (state, action) => {
    return { products: data.products };
}

export default store;