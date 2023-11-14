const express = require('express');
const fs = require('fs');
const loginRouter = require('./routes/login');
const loggedRouter = require('./routes/logged');
const bodyparser = require('body-parser');


const router = express.Router();

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use(loginRouter);
app.use(loggedRouter);

app.listen(4000);