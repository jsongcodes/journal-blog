import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Journal Blog</h1>
      <div className="links">
        <Link to="/create">New Entry</Link>
        <Link to="/">Past Entries</Link>
      </div>
    </nav>
  );
};

export default Navbar;
