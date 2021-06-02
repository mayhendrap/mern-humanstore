import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
});

export default mongoose.model('Product', productSchema);