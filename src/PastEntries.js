import { useState, useEffect } from "react";
import EntryList from "./EntryList";

const Home = () => {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
      fetch('http://localhost:8000/entries')
      .then(resp => resp.json())
      .then(data => setEntries(data))
  }, [])

  return (
    <div className="past-entries">
      {entries && <EntryList entries={entries} title="All Entries"/>}
    </div>
  );
};

export default Home;
