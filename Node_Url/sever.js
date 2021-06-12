const express = require('express');
const app = express();

app.use(express.static('views'));
app.set('view engine',"ejs");

app.get('/',function(req, res){
res.render('home')
});

app.get('/about',function(req,res){
    res.send('<h1>This is Second page</h1>')
})

app.listen(3000,function(){
    console.log('Port is running in localhost!')
}) 

