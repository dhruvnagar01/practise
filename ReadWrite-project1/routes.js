const path = require('path');
const fs = require('fs');

const requestHandler = ((req, res)=> {

    const url = req.url;
    const method = req.method;
    const body = [];

    if(url ==='/') {

    fs.readFile('message.txt', "UTF-8", (err, data)=> {
        if(err){
            console.log(err);
        }
        console.log("data from file "+data);
        
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(`<body>${data}</body>`);
        
        res.write('<body><form action="/message"method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        
    });
}
    
        else if(url === '/message' && method === 'POST'){
            
          
            req.on('data', (chunk) => {   
                console.log(chunk);         
                body.push(chunk);
            });
    
             req.on('end', ()=> {
                const parseBody = Buffer.concat(body).toString();
                const message = parseBody.split('=')[1];
                fs.writeFile('message.txt', message, err => {
                    
                    res.statusCode = 302;
                    res.setHeader("Location", "/");
                    return res.end();
    
                }); 
            });
            
        }
        else {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello From my Node.js Server</h1></body>');
        res.write('</html>');
        res.end();
        }
});

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};