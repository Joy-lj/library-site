import {Link} from "react-router-dom";
import {useState} from "react";
import "../css/Aside.css";

const LibraryAside = ({onLibraryChange}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        <div id="toggle-nav" onClick={toggleMenu} className="hidden-small-aside">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <aside id="browse-aside" className={menuOpen ? "" : "hidden-small-aside"}>
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
        </>
    );
};

export default LibraryAside;