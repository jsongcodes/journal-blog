const EntryList = ({ entries, title }) => {
  return (
    <div className="entry-list">
      <h2>{title}</h2>
      {entries.map((entry) => (
        <div className="entry-preview" key={entry.id}>
          <h2>{entry.title}</h2>
          <p>Written by {entry.author}</p>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
