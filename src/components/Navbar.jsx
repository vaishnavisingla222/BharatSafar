import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Festivals", path: "/festivals" },
    { name: "Map of India", path: "/map" },
    { name: "Planner", path: "/planner" },
    { name: "Budget", path: "/budget" },
    { name: "Saved Trips", path: "/savedtrips" },
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-hindi">भारत</span>
        <span className="logo-english">Safar</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div id="navbar-links" className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
export default Navbar;
