import Axios from "axios";
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    CART_ADD_ITEM
} from "./ProductConst"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST, payload: productId
    });
    try {
        const { data } = await Axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
        })
    }
}

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        },
    });
    
    
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
        // console.log( localStorage.getItem('cartItems'))
    }
