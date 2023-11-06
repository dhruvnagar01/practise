const http = require("https");

const server = http.createServer( (req, res) => {
    
    res.end('Dhruv Nagar');
           
    })

server.listen(4000,"127.0.0.1",()=>{
    console.log("Dhruv nagar");
});