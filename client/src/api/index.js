import axios from 'axios';

const API = axios.create({ baseURL: 'https://humanstore.herokuapp.com/' });

export const fetchProducts = () => API.get('/products');
export const fetchSingleProduct = (id) => API.get(`/products/detail/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const getAllCartProducts = (userId) => API.post('/cart', {userId: userId});
export const addProductToCart = (dataProduct) => API.post('/cart', dataProduct);
export const incrementProductFromCart = (product) => API.patch('/cart/increment', product);