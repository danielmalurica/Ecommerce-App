const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');

dotenv.config()

const app = express()

const port =  process.env.PORT;

app.get('/', (req, res) => {
    res.send('API is running...dd')
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id == req.params.id)
    res.json(product);
});

app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode started on port ${port}`))