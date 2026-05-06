const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true
}));

// app.use(
//     session({
//         secret:"123jdjhgjgh",
//         resave:false,
//         saveUninitialized:true
//     })
// );

// In-memory students
let students = [
    { id: 1, name: "Dhruvin", email: "dhruvin@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" }
];


function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}

// ================= LOGIN =================

// Login page
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

// Login submit
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Simple logic (username = password)
    if (username === password) {
        req.session.user = username;
        res.redirect("/");
    } else {
        res.render("login", { error: "Invalid credentials" });
    }
});

// Logout
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

// ================= CRUD =================

// Read (with search)
app.get("/", isAuthenticated, (req, res) => {
    let search = req.query.search || "";

    let filtered = students.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    res.render("index", {
        students: filtered,
        user: req.session.user,
        search
    });
});

// Add
app.get("/add", isAuthenticated, (req, res) => {
    res.render("add");
});

app.post("/add", isAuthenticated, (req, res) => {
    const { name, email } = req.body;

    students.push({
        id: students.length + 1,
        name,
        email
    });

    res.redirect("/");
});

// Edit
app.get("/edit/:id", isAuthenticated, (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    res.render("edit", { student });
});

app.post("/edit/:id", isAuthenticated, (req, res) => {
    const { name, email } = req.body;

    students = students.map(s =>
        s.id == req.params.id ? { ...s, name, email } : s
    );

    res.redirect("/");
});

// Delete
app.get("/delete/:id", isAuthenticated, (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.redirect("/");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});