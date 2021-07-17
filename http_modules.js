let http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{
        "content-Type":"text/html"
    });
    res.end("Any Text  !")
}).listen(8080);
