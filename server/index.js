import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import productsRoutes from './routes/products.js';
import userRoutes from './routes/user.js';
import cartRoutes from './routes/cart.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/products', productsRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);

app.get('/', (req, res) => {
    res.send('Heloooo');
});

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);