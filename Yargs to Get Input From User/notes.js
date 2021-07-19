var creatNotes = (title,body)=>{
    console.log("creat Created", title, body);
}
var getAllNotes = ()=>{
    console.log('get all Notes!')
}
var readNotes = (title)=>{
    console.log('ReadNotes' +title);
}
var removeNotes = (title) =>{
    console.log('remove =' +title);
}


module.exports = {
    creatNotes,
    getAllNotes,
    readNotes,
    removeNotes
}
