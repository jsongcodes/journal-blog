import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewEntry from "./NewEntry";
import PastEntries from "./PastEntries";
import Home from "./Home";
import { useState, useEffect } from "react";

const App = () => {
  const [entries, setEntries] = useState([]);

  function onAddEntry(newEntry) {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
  }

  useEffect(() => {
    fetch("http://localhost:8000/entries")
      .then((resp) => resp.json())
      .then((data) => setEntries(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/entries">
              <PastEntries entries={entries} />
            </Route>
            <Route path="/newentry">
              <NewEntry onAddEntry={onAddEntry} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
