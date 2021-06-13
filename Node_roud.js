const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Welcome To The Home Page!');

});

app.get('/about',(req,res)=>{
    res.send('This Page called About!')
});



app.listen(3000);
