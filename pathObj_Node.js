const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
----------------------------------------
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\pradh\OneDrive\Desktop\Node.js\Ex_6> node index.js
{
  root: 'C:\\',
  dir: 'C:\\Users\\pradh\\OneDrive\\Desktop\\Node.js\\Ex_6',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
PS C:\Users\pradh\OneDrive\Desktop\Node.js\Ex_6> 
