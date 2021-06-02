import { FETCH_ALL_PRODUCT, FETCH_SINGLE_PRODUCT } from "../constants/actionTypes";

export default (products = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCT:
            return action.payload;
        case FETCH_SINGLE_PRODUCT:
            return {detailProduct: action.payload};
        default:
            return products;
    }
}