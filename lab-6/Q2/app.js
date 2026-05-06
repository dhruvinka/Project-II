const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome to the Home Page</h1>
    <form action="/submit" method="post">
        <input type="text" name="username" placeholder="Enter your name">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`);
});


app.post('/submit',(req,res)=>{
    const username=req.body.username;
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, ${username}!  Data Received Successfully</h1>
</body>
</html>`);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});