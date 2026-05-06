const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Book = require('./model/Book');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5174"
}));


mongoose.connect('mongodb://localhost:27017/book')
    .then(() => console.log('Connected to MongoDB'));


app.get('/books', async (req, res) => {
    console.log("GET /books hit");
    const books = await Book.find();
    res.json(books);
});

app.post('/books', async (req, res) => {
    const book = await Book.create(req.body);
    res.json(book);
});


app.delete('/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

//update
app.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});