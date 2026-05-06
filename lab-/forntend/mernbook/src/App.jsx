import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    author: "",
    price: ""
  });

  const BASE_URL = "http://localhost:3000";


  // FETCH
  const fetchBooks = async () => {
    const res = await axios.get(`${BASE_URL}/books`);
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`${BASE_URL}/books/${editId}`, form);
    } else {
      await axios.post(`${BASE_URL}/books`, form);
    }

    setForm({ title: "", author: "", price: "" });
    setEditId(null)
    fetchBooks();
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/books/${id}`);
    fetchBooks();
  };

  // EDIT
  const handleEdit = (book) => {
    setForm({
      title: book.title,
      author: book.author,
      price: book.price
    });
    setEditId(book._id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Books CRUD</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} placeholder="Title" onChange={handleChange} />
        <input name="author" value={form.author} placeholder="Author" onChange={handleChange} />
        <input name="price" value={form.price} placeholder="Price" onChange={handleChange} />
        <button>{editId ? "Update" : "Add"}</button>
      </form>

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(books) && books.map(b => (
            <tr key={b._id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.price}</td>
              <td>
                <button onClick={() => handleEdit(b)}>Edit</button>
                <button onClick={() => handleDelete(b._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;