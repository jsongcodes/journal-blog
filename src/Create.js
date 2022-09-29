const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Entry</h2>
      <form>
        <label>Entry title:</label>
        <input type="text" required />
      </form>
    </div>
  );
};

export default Create;
