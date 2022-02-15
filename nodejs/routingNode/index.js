const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        var fileUrl;
        if (req.url == "/") {
            fileUrl = "/index.html"
        }
        else if(req.url=="/about"){
            fileUrl="/about.html";
        } 
        else if(req.url=="/contact"){
            fileUrl="/contact.html";
        }
        else { fileUrl = req.url }
        var filePath = path.resolve('./'+fileUrl);
        // console.log(filePath);
        const fileExt = path.extname(filePath);
        // console.log(fileExt);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader("Content-type", "text/html");
                    res.end("none")
                } else {
                    res.statusCode = 200;
                    res.setHeader("Content-type", "text/html");
                    fs.createReadStream(filePath).pipe(res);
                }
            })
        } else {
            res.statusCode = 404;
            res.setHeader("Content-type", "text/html");
            res.end("not html file")
        }
    } else {
        res.statusCode = 404;
        res.setHeader("Content-type", "text/html");
        res.end("Not supported")
    }
});

server.listen(port, hostname, () => {
    console.log(`Running:- http://${hostname}:${port}`);
});