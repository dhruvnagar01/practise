const path = require('path');

const express = require('express');

const router = express.Router();

const fs = require('fs');

let localStorage = require('local-storage');

const chatFile = path.join(__dirname,'../','chats','message.txt');
const loginFile = path.join(__dirname,'../','views','login.html');


// GET REQUEST FOR "/" 
router.get('/logged', (req, res, next) => {

       
    fs.readFile(chatFile , "utf-8", (err, data) => {
        
        if(err) {
            console.log(err);
        }
        
        // res.write('<html>');
        // res.write('<head><title>Enter Message</title><head>');
        // res.write(`<body>${data}</body>`);
        
        // res.write('</html>');

        res.send(` ${data} <br> <form action="/logged/message" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')" >      
        <input type="text" name="message" id="message">
         <input type="hidden"  name="username" id="username"> 
         <br>
         <button type="submit">send</button>
         </form>`);
        
        
    });

    
}); 
    


// POST REQUEST FOR FORM DATA

router.post('/logged/message' , (req, res, next)=> {
   
    const messgae = req.body.message + ' \n';

    const userName = req.body.username;

    fs.appendFile(chatFile , (userName+ ": "+ messgae ) , (err) => {
        if(err){
            console.log(err);
            res.status(500).send("Internal server error");
            return;
        }
        console.log(messgae);
        console.log('POST WORKING');
        res.redirect('/logged')
        res.end()
        
     })
});

module.exports = router;