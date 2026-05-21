import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <p className="footer-title">ORDEAL GAMES</p>
                    <p className="footer-copyright">&copy; {new Date().getFullYear()} Ordeal Games. All rights reserved.</p>
                    <Link to="/privacy" className="footer-privacy">Privacy Policy</Link>
                </div>
                <ul className="footer-links">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/games">GAMES</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;