const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Entry</h2>
      <form>
        <label>Entry title:</label>
        <input type="text" required />
        <label>Entry body:</label>
        <textarea
        required></textarea>
        <label>Entry author:</label>
        <select>
            <option value="Jasmin">Jasmin</option>
            <option value="New User">New User</option>
        </select>
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default Create;
