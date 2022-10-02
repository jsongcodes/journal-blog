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
        <article>
          <h2>{entries.prompt}</h2>
          <p>Written on {entries.date}</p>
          <div>{entries.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default EntryDetails;
