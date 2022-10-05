import { useState, useEffect } from "react";
import EntryList from "./EntryList";

// import EntryDetails from "./EntryDetails";

const PastEntries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000/entries')
      .then(resp => resp.json())
      .then(data => setEntries(data))
  }, [])

  // function deleteEntry(id){
  //   const updatedEntries = entries.filter(entry => entry.id !== id)
  //   setEntries(updatedEntries)
  // }



  return (
    <div className="past-entries">
      {entries && <EntryList entries={entries} title="All Entries"/>}
      {/* <EntryDetails entries={entries} 
      deleteEntry={deleteEntry}
      /> */}
    </div>
  );
};

export default PastEntries;
