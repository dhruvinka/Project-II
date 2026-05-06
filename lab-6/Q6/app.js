const express=require('express');
const path=require('path');
const app=express();
const bodyParser=require('body-parser');
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


let student=
[
    {name:'Dhruvin',age:20,grade:'A'},
    {name:'Kanani',age:22,grade:'B'},
    {name:'Anand',age:19,grade:'A+'}
];

app.get('/',(req,res)=>{
    res.send(  `
        <html>
        <head> </head>
        <body>
            <h1>Student List</h1>
            <ul>
                ${student.map(s=>`<li>${s.name} - Age: ${s.age}, Grade: ${s.grade}</li>`)}
            </ul>
            <h2>Add Student</h2>
            <form action="/add-student" method="post">
                <input type="text" name="name" placeholder="Name" required>
                <input type="number" name="age" placeholder="Age" required>
                <input type="text" name="grade" placeholder="Grade" required>
                <button type="submit">Add Student</button>
            </form>

        </body>
        </html>
        `)
})

app.post('/add-student',(req,res)=>{
    const {name,age,grade}=req.body;
    student.push({name,age,grade});
    res.redirect('/');
});


app.listen(port);