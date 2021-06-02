import express from 'express';
import { getProducts, getSingleProduct } from '../controllers/products.js'

const router = express.Router();

router.get('/', getProducts);
router.get('/detail/:id', getSingleProduct);

export default router;