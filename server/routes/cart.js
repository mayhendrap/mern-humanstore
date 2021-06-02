import express from 'express';
import { getAllProducts, addProduct, incrementProduct, decrementProduct } from '../controllers/cart.js';

const router = express.Router();

router.post('/', getAllProducts);
router.post('/', addProduct);
router.patch('/increment', incrementProduct);
router.patch('/decrement', decrementProduct);

export default router;