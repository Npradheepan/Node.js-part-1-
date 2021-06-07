Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\pradh\OneDrive\Desktop\node\Ex> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (ex)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: pradheepan
license: (ISC)
About to write to C:\Users\pradh\OneDrive\Desktop\node\Ex\package.json:

{
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "pradheepan",
  "license": "ISC"
}


Is this OK? (yes)
PS C:\Users\pradh\OneDrive\Desktop\node\Ex> npm i express ejs
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ex@1.0.0 No description
npm WARN ex@1.0.0 No repository field.

+ express@4.17.1
+ ejs@3.1.6
added 65 packages from 44 contributors and audited 65 packages in 11.839s
found 0 vulnerabilities

PS C:\Users\pradh\OneDrive\Desktop\node\Ex> npm i --save-dev nodemon dotenv
> nodemon@2.0.7 postinstall C:\Users\pradh\OneDrive\Desktop\node\Ex\node_modules\nodemon      
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.1 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted 
npm WARN ex@1.0.0 No description
npm WARN ex@1.0.0 No repository field.

+ nodemon@2.0.7
+ dotenv@10.0.0
added 118 packages from 52 contributors and audited 184 packages in 23.073s

11 packages are looking for funding
  run `npm fund` for details
found 0 vulnerabilities

PS C:\Users\pradh\OneDrive\Desktop\node\Ex> nodemon
nodemon : The term 'nodemon' is not recognized as the name of a cmdlet, function, script      
file, or operable program. Check the spelling of the name, or if a path was included, verify  
that the path is correct and try again.
At line:1 char:1
+ nodemon
+ ~~~~~~~
    + CategoryInfo          : ObjectNotFound: (nodemon:String) [], CommandNotFoundException   
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS C:\Users\pradh\OneDrive\Desktop\node\Ex>  nodemon
nodemon : The term 'nodemon' is not recognized as the name of a cmdlet, function, script      
file, or operable program. Check the spelling of the name, or if a path was included, verify  
that the path is correct and try again.
At line:1 char:2
+  nodemon
+  ~~~~~~~
    + CategoryInfo          : ObjectNotFound: (nodemon:String) [], CommandNotFoundException   
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS C:\Users\pradh\OneDrive\Desktop\node\Ex> npm run devStart

> ex@1.0.0 devStart C:\Users\pradh\OneDrive\Desktop\node\Ex
> nodemon server.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
