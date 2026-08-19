import { Link } from "react-router-dom";
import "./Navbar.css";
import DevLogo from "../Navbar/DonDev.png";

function Navbar() {
    return (
        <header className="site-wrapper nav-wrapper">

            <Link to="/" className="dev-logo-link">
                <img
                    className="dev_logo"
                    src={DevLogo}
                    alt="Don Dev"
                />
            </Link>

            <nav className="nav-links">
                <Link to="/about"> About</Link>
                <Link to="/projects"> Build</Link>
                <Link to="/experience"> Experience</Link>
                <Link to="/contact"> Contact</Link>
            </nav>

        </header>
    );
}

export default Navbar;