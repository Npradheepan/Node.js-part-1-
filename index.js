const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req, res)=>{
    res.render('home',{
        tittle:"home"
    });

});

app.get('/about',(req,res)=>{
    res.render('about',{
        tittle:"about"  
    });
});

app.get('/products',(req,res)=>{ 
    res.render('products', {
        tittle:"Women's Collection"
    }); 
});

app.get('/product/:id',(req,res)=>{
    var data = [{
        id : 1,
        productName:"Labtop"
    }, {
        id : 2,
        productName:"Mobile"
    }

    ]
    var result;
    data.forEach((product) => {
        if(product.id == req.params.id){
            result = product;
            return true;
        }
    })
    res.render('productdetails',{
        tittle:"product Details",
        product:result

    })

});



app.listen(3000);