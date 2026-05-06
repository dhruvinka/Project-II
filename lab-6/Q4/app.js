const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/form.html');
})

app.post('/register',(req,res)=>{
    const username=req.body.name;
    const email=req.body.email;
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Registration Successful</h2>
    <p>Name: ${username}</p>
    <p>Email: ${email}</p>
</body>
</html>`);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

