import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>The Journal Blog</h1>
      </Link>
      <div className="links">
        <Link to="/newentry">New Entry</Link>
        <Link to="/entries">Past Entries</Link>
      </div>
    </nav>
  );
};

export default Navbar;
