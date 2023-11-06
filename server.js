const http = require("http");

const server = http.createServer( (req, res) => {
    
    if(req.url == '/home') {
     return res.end('Welcome Home');
    }
    if(req.url == '/about'){
    return res.end("Welcome to About Us page");
    }
    if(req.url == "/node")
    {
    return res.end("Welcome to my Node Js project");
    }      
    })

server.listen(4000);