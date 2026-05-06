const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const port=3000;


app.use(bodyParser.urlencoded({extended:true}));

app.use(( req, res, next ) => {
    let currentTime = new Date().toLocaleTimeString();
    console.log(`Request received at ${currentTime}`);
    next();
});

app.get('/',(req,res)=>{
   res.send("Request received at " + new Date().toLocaleTimeString());
})
app.get('/about',(req,res)=>{
   res.send("Request received at " + new Date().toLocaleTimeString());
})
app.get('/contact',(req,res)=>{
   res.send("Request received at " + new Date().toLocaleTimeString());
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})