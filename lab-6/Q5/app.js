const express=require('express');
const path=require('path');
const app=express();
const bodyParser=require('body-parser');
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(port);

