const http= require("http");
const fs= require("fs");

const server= http.createServer((req , res)=>{
    const stream= fs.createReadStream("samp.txt");
    stream.pipe(res);
    // fs.readFile("samp.txt",(err,data)=>{
    //     res.end(data);
    //})
});

server.listen(3000);