import "../css/Aside.css";
import { Link } from "react-router-dom";

const AdminAside = ({onAdminChange}) => {
    return (
        <aside id="browse-aside">
            <nav id="main-nav">
                <ul id="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <nav id="browse-nav">
                <h4><Link to="/admin" onClick={() => onAdminChange("Books")}>Books</Link></h4>
                <h4><Link to="/admin" onClick={() => onAdminChange("Users")}>Users</Link></h4>
            </nav>
            <button><Link to="/login">Logout</Link></button>
        </aside>
    );
};

export default AdminAside;