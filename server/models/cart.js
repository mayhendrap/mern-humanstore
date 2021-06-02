import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    userId: { type: mongoose.ObjectId, required: true },
    productId: { type: mongoose.ObjectId, required: true },
    productQty: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
});

export default mongoose.model('Cart', cartSchema);