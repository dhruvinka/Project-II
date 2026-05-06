const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const Student = require("./models/Student");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true
}));

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

//  Auth Middleware
function isAuth(req, res, next){
    if(req.session.user) next();
    else res.redirect("/login");
}

// ================= LOGIN =================

app.get("/login", (req, res)=>{
    res.render("login", { error: null });
});

app.post("/login", (req, res)=>{
    const { username, password } = req.body;

    if(username === password){
        req.session.user = username;
        res.redirect("/");
    } else {
        res.render("login", { error: "Invalid credentials" });
    }
});

app.get("/logout", (req, res)=>{
    req.session.destroy(()=> res.redirect("/login"));
});

// ================= CRUD =================

// READ 
app.get("/", isAuth, async (req, res)=>{
    let search = req.query.search || "";

    let students = await Student.find();

    res.render("index", {
        students,
        user: req.session.user,
        search
    });
});

//Search
app.get("/search", isAuth, async (req, res)=>{
    let search = req.query.search || "";

    let students = await Student.find({
        name: search
    });

    res.render("index", {
        students,
        user: req.session.user,
        search
    });
});


// ADD
app.get("/add", isAuth, (req, res)=>{
    res.render("add");
});

app.post("/add", isAuth, async (req, res)=>{
    await Student.create(req.body);
    res.redirect("/");
});

// EDIT
app.get("/edit/:id", isAuth, async (req, res)=>{
    let student = await Student.findById(req.params.id);
    res.render("edit", { student });
});

app.post("/edit/:id", isAuth, async (req, res)=>{
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

// DELETE
app.get("/delete/:id", isAuth, async (req, res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

// Start server
app.listen(3000, ()=>console.log("Server running"))