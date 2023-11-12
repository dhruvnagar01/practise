
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next)=> {
    res.status(404).send('<h1> Page not Found</h1>');
});

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);