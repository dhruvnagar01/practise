const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
console.log('In the middleware');
res.send('<h>Hello</h1>');
next();
});


app.use((req, res, next) => {
    console.log('In the another middleware');
    res.send( { key1: value })
    });

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);