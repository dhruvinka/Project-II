const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let students = [
    { id: 1, name: "Dhruvin", email: "dhruvin@gmail.com" }
];

app.get("/", (req, res) => {
    res.render("index", { students });
});

app.get("/add", (req, res) => {
    res.render("add");
});

app.post("/add", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.send("All fields required");
    }

    students.push({
        id: students.length + 1,
        name,
        email
    });

    res.redirect("/");
});


app.get("/edit/:id", (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    res.render("edit", { student });
});


app.post("/edit/:id", (req, res) => {
    const { name, email } = req.body;

    students = students.map(s =>
        s.id == req.params.id ? { ...s, name, email } : s
    );

    res.redirect("/");
});


app.get("/delete/:id", (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.redirect("/");
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});