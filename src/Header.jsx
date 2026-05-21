import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1 className="nav-title">ORDEAL GAMES</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/games">GAMES</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;