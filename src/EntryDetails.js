import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EntryDetails = () => {
  const { id } = useParams();
  const [entries, setEntries] = useState(null);
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/entries/${id}`, {
        method: 'DELETE',
    }).then(() => {
      history.push("/pastentries");
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/entries/${id}`)
      .then((resp) => resp.json())
      .then((data) => setEntries(data));
  }, [id]);

  return (
    <div className="entry-details">
      {entries && (
        <article className="entry-details">
          <h2>{entries.prompt}</h2>
          <p className="entry-details">Written on {entries.date}</p>
          <div className="entry-details">{entries.body}</div>
          <button onClick={handleClick}>Delete 🗑️ </button>
        </article>
      )}
    </div>
  );
};

export default EntryDetails;
