//import module
import {LocalStorage} from 'node-localstorage' 

const express = require('express');
const app = express();

// constructor function to create a storage directory inside our project for all our localStorage setItem.
var localStorage = new LocalStorage('./scratch'); 

//Setting localStorage Item
localStorage.setItem('username', userName); 

module.exports = app;