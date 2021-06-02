import { ADD_PRODUCT_TO_CART, DECREMENT_PRODUCT_CART, GET_PRODUCTS, REMOVE_PRODUCT_FROM_CART, SET_CART_TOTAL_PRICE, SET_COUNT_CART } from "../constants/actionTypes";
import * as api from '../../api';

export const getAllProducts = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getAllCartProducts(userId);
        dispatch({ type: GET_PRODUCTS, payload: data.result});
    } catch (error) {
        console.log(error);
    }
};

export const addProductToCart = (data) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: data});
    dispatch({ type: SET_COUNT_CART, payload: data});
    dispatch({ type: SET_CART_TOTAL_PRICE, payload: data});
};

export const decrementProductCart = (data) => async (dispatch) => {
    dispatch({ type: DECREMENT_PRODUCT_CART, payload: data});
    dispatch({ type: SET_COUNT_CART, payload: data});
    dispatch({ type: SET_CART_TOTAL_PRICE, payload: data});
};

export const removeProductFromCart = (data) => async (dispatch) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: data});
    dispatch({ type: SET_COUNT_CART, payload: data});
    dispatch({ type: SET_CART_TOTAL_PRICE, payload: data});
};