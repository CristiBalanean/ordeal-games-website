import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <h1 className="nav-title">ORDEAL GAMES</h1>

            {/* Desktop nav */}
            <nav className="nav-desktop">
                <ul className="nav-links">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/games">GAMES</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>

            {/* Hamburger button */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
                <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
                <span className={`hamburger-line ${menuOpen ? "open" : ""}`}></span>
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <nav className="nav-mobile">
                    <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
                    <Link to="/games" onClick={() => setMenuOpen(false)}>GAMES</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
                </nav>
            )}
        </header>
    );
}

export default Header;