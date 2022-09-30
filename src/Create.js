import { useState } from "react";
import './index.css';


const Create = () => {
  const [prompt, setPrompt] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { prompt, body, date };
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
        <label>Entry prompt:</label>
        <select value={prompt} onChange={(e) => setPrompt(e.target.value)}>
          <option value="Who is">Who is</option>
          <option value="What is">What is</option>
        </select>

        <label>Entry body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Entry date:</label>
        <select value={date} onChange={(e) => setDate(e.target.value)}>
          <option value="Jasmin">Jasmin</option>
          <option value="New User">New User</option>
        </select>
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default Create;
