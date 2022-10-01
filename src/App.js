import Navbar from './Navbar';
import PastEntries from './PastEntries';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import EntryDetails from './EntryDetails';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pastentries">
              <PastEntries />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/entries/:id">
              <EntryDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
