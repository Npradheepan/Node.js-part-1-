var fs = require("fs");
fs.readFile('demol.txt', function (err, data) {
  if (err) {
    return console.log.error(err);
  }
  console.log("Async data :" + data.tostring())
});
var data = fs.readFileSync("demol.txt");
console.log("sync data :" + data.toString());
console.log(("program end"));
