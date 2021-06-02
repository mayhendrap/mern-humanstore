import { FETCH_ALL_PRODUCT, FETCH_SINGLE_PRODUCT } from "../constants/actionTypes";
import * as api from '../../api';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();
        dispatch({ type: FETCH_ALL_PRODUCT, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getSingleProduct = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleProduct(id);
        dispatch({ type: FETCH_SINGLE_PRODUCT, payload: data });
    } catch (error) {
        console.log(error);
    }
};