const http = require("http");
const hostname = "localhost";
const port = 8080;
// const server = http.createServer((req,res)=>{
//     // console.log(req.headers);
//     res.statusCode=200;
//     res.setHeader('Content-type','text/html');
//     res.end('<html><body><h1>It is working</h1></body></html>');
// });
// server.listen(port,hostname,()=>{
//     console.log(`server runnig at http://${hostname}:${port}`)
// })

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>It is working now</h1></body></html>');
}).listen(port);