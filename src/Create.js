import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Jasmin");

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { title, body, author };
    fetch('http://localhost:8000/entries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(entry)
    })
  };

  return (
    <div className="create">
      <h2>Add a New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Entry title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Entry body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Entry author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Jasmin">Jasmin</option>
          <option value="New User">New User</option>
        </select>
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default Create;
