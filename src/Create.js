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
          <option value="What made you feel grateful today?">What made you feel grateful today?</option>
          <option value="What is your favorite thing about yourself and why?">What is your favorite thing about yourself and why?</option>
          <option value="Who inspires you? Why?">Who inspires you? Why?</option>
          <option value="WWhere would you like to visit? Why?">Where would you like to visit? Why?</option>
          <option value="What are your priorities today?">What are your priorities today?</option>
          <option value="Looking back, what are some things you have achieved?">Looking back, what are some things you have achieved?</option>
          <option value="Name 3 things you will do for yourself today.">Name 3 things you will do for yourself today.</option>
          <option value="What makes you happy? Why?">What makes you happy? Why?</option>
        </select>

        <label>Entry body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Entry date:</label>
        <input
            type="date"
            value={date}
            placeholder="DD/MM/YY"
            onChange={(e) => setDate(e.target.value)}
          />
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default Create;
