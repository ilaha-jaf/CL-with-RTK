import { Link } from "react-router-dom";
import "./navbar.css"
export default function Navbar() {

    return (
        <div className="nav-section">
            <nav className="nav">
                <ul className="navbar">
                    <Link to="/" className="site-title">Categories</Link>
                    <Link to="/addCategory">Add Category</Link>
                    <Link to="/favorites">Favorites </Link>
                    <Link to="/basket">Basket</Link>
                </ul>
            </nav>
        </div>
    );
}