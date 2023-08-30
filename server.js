const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){

    if(req.url == '/'){
        res.write("This is Home Page.");
        res.end()
    } else if(req.url =="/about"){
        res.write("This is About Page.");
        res.end()
    } else if(req.url =="/contact"){
        res.write("This is Contact Page.");
        res.end()

    } else if(req.url =="/file-write"){
        fs.writeFile("demo.txt", "Hello World", (error)=>{
            if(error){
                res.end("File Write fail");
            } else {
                res.end("File Write Complate")
            }
        })
    }



})



server.listen(3000);
console.log("Listening on port 3000.")