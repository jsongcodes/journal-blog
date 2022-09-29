import { useState, useEffect } from "react";
import EntryList from "./EntryList";

const Home = () => {
  const [entries, setEntries] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "Jasmin",
      id: 1,
    },
    {
      title: "My new website2",
      body: "lorem ipsum...",
      author: "Jasmin",
      id: 2,
    },
    {
      title: "My new website3",
      body: "lorem ipsum...",
      author: "Jasmin",
      id: 3,
    },
  ]);

  const [name, setName] = useState('Jasmin')

  const handleDelete = (id) => {
    const newEntries = entries.filter(entry => entry.id !== id);
    setEntries(newEntries);
  }

  useEffect(() => {
    console.log('useeffect ran')
  }, [])

  return (
    <div className="home">
      <EntryList entries={entries} title="All Entries" handleDelete={handleDelete}/>
      <button onClick={() => setName('new name')}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
