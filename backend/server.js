import express  from 'express';
import dotenv  from 'dotenv';
import products  from './data/products.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

const port =  process.env.PORT;

app.get('/', (req, res) => {
    res.send('API is running...dd')
});

app.use('/api/products', productRoutes);

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id == req.params.id)
    res.json(product);
});

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode started on port ${port}`))