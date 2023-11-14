const express = require('express');

const router = express.Router();

const path = require('path');


let localStorage = require('local-storage');

// GET REQUEST TO GET LOGIN PAGE FORM
router.get('/', (req, res, next) => {


    // f(user != null && user != 'undefined') {
    //     console.log("USER NAME IS " , user);
        
    // };i
            
    res.sendFile(path.join(__dirname,'../','views','login.html'), (err)=>{
    
        if(err)
        console.log("Having internal server issue");          
            
        });
       
    });


    // POST REQUEST TO SEND USER USERNAME 
router.post('/', (req, res, next) => {

     console.log(req.body.username);

     res.redirect('/logged');
 //  dataUser(req.body.username, res);     

});



// function to check user is existing or not
function dataUser(userName, res) {

    const user = res.body.username;
    
    if(user === null || user === 'undefined'){
       
        console.log("Loggedin Success ", userName);
        localStorage.set("userName", userName);
    
      res.redirect('/logged');
    }
    else {
        console.log("User is already loggedin " , userName);
        res.redirect('/logged')
      }
    
}

// MODULE EXPORT TO OTHER MODULES
    module.exports = router;