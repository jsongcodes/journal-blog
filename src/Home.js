import { useState } from "react";

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

  return (
    <div className="home">
      {entries.map((entry) => (
        <div className="entry-preview" key={entry.id}>
          <h2>{entry.title}</h2>
          <p>Written by {entry.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
