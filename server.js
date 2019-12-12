const express=require('express');
const hbs=require('hbs');

var app=express();
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');

hbs.registerHelper('getCurYear',()=>{
    return new Date().getFullYear()
});

app.use((req,res,next)=>{
    
    console.log(`Accessed ${req.url} using ${req.method}`);
    
    res.render('maintain.hbs',{
        pageTitle:'UNDER MAINTENANCE'
    })
    
//    next();
});


app.use(express.static(__dirname));

app.get('/',(request,response)=>{
    response.send('<h1>I TRIED</h1>');
    
});

app.get('/about',(request,response)=>{
    response.render('about.hbs',{
        pageTitle:'ABOUT PAGE!'
    });    
});

app.listen(8090,()=>{console.log('ON PORT 8090');});