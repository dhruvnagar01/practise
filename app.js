const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
   next();
});

app.use('/add-product', (req, res, next) => {
console.log('In the middleware add product');
res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>Hello</h1>');
    });


// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);
