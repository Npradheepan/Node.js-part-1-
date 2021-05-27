var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'content-Type':'text/plain'});
    res.write('Welcome page');
    res.end('End');
}).listen(8080);

var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'content-Type':'text/plain'});
    res.write('Welcome webpage');
    res.end('End');
}).listen(8080);

----------------------------------------------
Filesysterm:-
----------------------------------------------
  var fs= require('fs');
fs.readFile('message.txt',function(err,data){
    if(err){
        return console.log.error(err);
    }
    console.log('Async data:',data.toString());
});
var data = fs.readFileSync('message.txt');
console.log('sync data:' + data.toString());
console.log('programm end');
