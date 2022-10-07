import { useState } from "react";
import "../index.css";
import { useHistory } from "react-router-dom";

const NewEntry = ({ onAddEntry }) => {

  const [inputForm, setInputForm] = useState({
    prompt: "",
    body: "",
    date: "",
  });
  
  const history = useHistory();


  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputForm),
    })
      .then((resp) => resp.json())
      .then((data) => onAddEntry(data))
      .then(() => {
        history.push(`/entries`);
      });
  };

  return (
    <div className="new-entry">
      <h2>Add a New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Entry prompt:</label>
        <select name="prompt" value={inputForm.prompt} onChange={handleChange}>
          <option value="Select Prompt">Select Prompt</option>
          <option value="What is your favorite thing about yourself and why?">
            What is your favorite thing about yourself and why?
          </option>
          <option value="Who inspires you? Why?">Who inspires you? Why?</option>
          <option value="Where would you like to visit? Why?">
            Where would you like to visit? Why?
          </option>
          <option value="What are your priorities today?">
            What are your priorities today?
          </option>
          <option value="Looking back, what are some things you have achieved?">
            Looking back, what are some things you have achieved?
          </option>
          <option value="Name 3 things you will do for yourself today.">
            Name 3 things you will do for yourself today.
          </option>
          <option value="What makes you happy? Why?">
            What makes you happy? Why?
          </option>
        </select>

        <label>Entry body:</label>
        <textarea
        name="body"
          required
          value={inputForm.body}
          onChange={handleChange}
        ></textarea>

        <label>Entry date:</label>
        <input
          required
          name="date"
          type="date"
          value={inputForm.date}
          placeholder="DD/MM/YY"
          onChange={handleChange}
        />

        <button>Add Entry 📝</button>
      </form>
    </div>
  );
};

export default NewEntry;
