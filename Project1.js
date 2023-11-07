const fs = require("fs");
const path = require("path");

const requestHandler = (req, res) => {
    
    if(req.url ==='/') {
        
        fs.readFile("message.txt","utf-8",(err, data) => {
            if(err){
                console.log(err);
            }

            console.log('data from file' + data);
            res.write("<html>");
            res.write('<head><title>Enter Message</title></head>')
            res.write(`<body>${data}</body>`);
            res.write(
                `<body><form action="/message" method="Post"><input type="text" name="message"></input><button type="submit">add</button></form></body>`
            );
            res.write("</html>");
            return res.end();
        });
    }
    
    else if(url === "/message" && method === "POST"){
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        
        return req.on("end", ()=> {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            fs.writeFile("message.txt",message, (err)=> {
                if(err) {
                    console.log(err);
                }
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
            
        });
       
    }

    else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write('<body><h1>My First page</h1></body>')
        res.write('</html>')
        res.end();
    }
};