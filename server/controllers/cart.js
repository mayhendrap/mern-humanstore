import Cart from '../models/cart.js';

export const getAllProducts = async (req, res) => {
    const { userId } = req.body;
    try {
        const cartProducts = await Cart.find({ userId });
        res.status(200).json({ result: cartProducts});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addProduct = async (req, res) => {
    const product = req.body;
    const existingCart = await Cart.findOne({ productId: product.productId });
    console.log(existingCart);
    if (existingCart) {
        try {
            const updatedOldProduct = await Cart.updateOne({ productId: product.productId}, { totalPrice: existingCart.price * (existingCart.productQty + 1), productQty: (existingCart.productQty + 1) })
            res.status(200).json({ result: updatedOldProduct });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        try {
            const newProduct = await Cart.create({ ...product, totalPrice: product.price, productQty: 1 });
            res.status(200).json({ result: newProduct });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export const incrementProduct = async (req, res, next) => {
    const product = req.body;
    try {
        const updatedOldProduct = await Cart.updateOne({ productId: product.productId}, { totalPrice: product.price * (product.productQty + 1), productQty: (product.productQty + 1) })
        res.status(200).json({ result: updatedOldProduct });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const decrementProduct = async (req, res, next) => {
    const product = req.body;
    try {
        const updatedOldProduct = await Cart.findOneAndUpdate({ productId: product.productId }, { totalPrice: product.price * (product.productQty - 1), productQty: (product.productQty - 1) });
        res.status(200).json({ result: updatedOldProduct });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}