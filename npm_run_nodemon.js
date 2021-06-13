Windows PowerShell
Copyright (C) Microsoft Corporation. Alle Rechte vorbehalten.

Lernen Sie das neue plattformübergreifende PowerShell kennen – https://aka.ms/pscore6

PS C:\Users\pradh\OneDrive\Desktop\Noproject_1> npm run nodemon

> noproject_1@1.0.0 nodemon C:\Users\pradh\OneDrive\Desktop\Noproject_1
> nodemon index.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node index.js`
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
internal/modules/cjs/loader.js:888
  ^

Error: Cannot find module 'express'
Require stack:
- C:\Users\pradh\OneDrive\Desktop\Noproject_1\index.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:885:15)
    at Function.Module._load (internal/modules/cjs/loader.js:730:27)
    at Module.require (internal/modules/cjs/loader.js:957:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (C:\Users\pradh\OneDrive\Desktop\Noproject_1\index.js:1:17)    
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'C:\\Users\\pradh\\OneDrive\\Desktop\\Noproject_1\\index.js' ]
}
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
      
