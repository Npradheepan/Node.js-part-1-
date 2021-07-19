console.log('This page check!');
const _= require(`lodash`);

console.log(_.isString('abc'));
console.log(_.isString(123));
console.log(process.argv[2])

console.log('process = ' , process.argv);
console.log('yargs = ', yargs.argv);
var argv = yargs.argv;
var command = argv._[0];


if(command === 'list'){
notes.getAllNotes();
}else if(command=== 'read'){
    notes.readNotes(argv.title);
}else if(command==='create'){
    notes.creatNotes(argv.title,argv.body);
}else if(command==='remove'){
    notes.removeNotes(argv.title)
}else{
    console.log('command Not Found!'); 
}
