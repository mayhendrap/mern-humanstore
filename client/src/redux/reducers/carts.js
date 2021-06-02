import { GET_PRODUCTS, ADD_PRODUCT_TO_CART, DECREMENT_PRODUCT_CART, REMOVE_PRODUCT_FROM_CART, SET_COUNT_CART, SET_CART_TOTAL_PRICE } from "../constants/actionTypes";

const initialState = {
    products: [],
    productsQty: 0,
    totalPriceProducts: 0
}

export default (state = initialState, {type, payload}) => {
    switch (type) {  
        case GET_PRODUCTS:
            return payload;
        case ADD_PRODUCT_TO_CART:
            const findProduct = state.products.find(product => product.productId === payload.productId)
            if(findProduct) {
                return {
                    ...state,
                    products: state.products.map(product =>
                    product.productId === payload.productId ? {...product, productQty: product.productQty + 1, totalPrice: product.price * (product.productQty + 1)} : product)
                }
            } else {
                return {...state, products: [...state.products, payload]};
            }
        case DECREMENT_PRODUCT_CART:
            const findDecrementProduct = state.products.find(product => product.productId === payload.productId)
            if(findDecrementProduct && findDecrementProduct.productQty > 1) {
                return {
                    ...state,
                    products: state.products.map(product =>
                    product.productId === payload.productId ? {...product, productQty: product.productQty - 1, totalPrice: product.price * (product.productQty - 1)} : product)
                }
            } else {
                return {...state, products: [...state.products, payload]};
            }
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                products: state.products.filter(product => product.productId !== payload.productId)
            };
        case SET_COUNT_CART:
            const sumAllQtyProducts = (accumulator, currentValue) => accumulator + currentValue
            let arrayQty = state.products.map(product => product.productQty)
            return {...state, productsQty: state.products.length !== 0 ? arrayQty.reduce(sumAllQtyProducts) : 0};
        case SET_CART_TOTAL_PRICE:
            const sumAllPriceProducts = (accumulator, currentValue) => accumulator + currentValue
            let arrayPrice = state.products.map(product => product.totalPrice)
            return {
                ...state,
                totalPriceProducts: state.products.length !== 0 ? arrayPrice.reduce(sumAllPriceProducts) : 0
            }
        default:
            return state;
    }
}