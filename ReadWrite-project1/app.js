const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./util/path');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const contactUsRoute = require('./routes/contactUs');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoute);
app.use((req, res, next)=> {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);