import { combineReducers } from 'redux';
import products from './products';
import auth from './auth';
import carts from './carts';

export default combineReducers({
    products,
    auth,
    carts,
})