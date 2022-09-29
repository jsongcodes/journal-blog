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
      history.push("/");
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/entries/${id}`)
      .then((resp) => resp.json())
      .then((data) => setEntries(data));
  }, []);

  return (
    <div className="entry-details">
      {entries && (
        <article>
          <h2>{entries.title}</h2>
          <p>Written by {entries.author}</p>
          <div>{entries.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default EntryDetails;
