import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">🇮🇳 BharatSafar</Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/map">Map of India</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/festivals">Festivals</Link>
        <Link to="/savedtrips">Saved Trips</Link>
      </div>
    </nav>
  );
}

export default Navbar;