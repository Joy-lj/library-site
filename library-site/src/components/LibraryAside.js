import {Outlet, Link} from "react-router-dom";
import "../css/Aside.css";

const LibraryAside = ({onLibraryChange}) => {
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
                <h4><Link to="/library" onClick={() => onLibraryChange("Your Library")}>Your Library</Link></h4>
                <h4><Link to="/library" onClick={() => onLibraryChange("Expired")}>Expired</Link></h4>
            </nav>
            <button><Link to="/returnbook">Return Book Here</Link></button>
        </aside>
    );
};

export default LibraryAside;