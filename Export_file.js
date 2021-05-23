Home File: index.js
var cal = require('./math');
var x = 10;
var y = 5;
console.log('Add:' + cal.add(x, y));

File: Math.js
exports.add = function (x, y) {
  return (x + y);
}
