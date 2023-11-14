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
        
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body>${data}</body>`);
        
        res.write('<body><form action="/logged/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
        
    });
    
}); 
    


// POST REQUEST FOR FORM DATA

router.post('/logged/message' , (req, res, next)=> {
   
    const data = req.body.message +' ';
    
    const user = localStorage.get("userName");     
    console.log("after logged in ", user);   

    fs.appendFile(chatFile , (user+ ": "+ data ) , (err) => {
        if(err){
            console.log(err);
            res.status(500).send("Internal server error");
            return;
        }
        console.log(data);
        console.log('POST WORKING');
        res.redirect('/logged')
        res.end()
        
     })
});

module.exports = router;