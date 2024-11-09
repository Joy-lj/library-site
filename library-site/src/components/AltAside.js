import {Link} from "react-router-dom";
import "../css/Aside.css";
import {useState} from 'react';


const AltAside = ({ onGenreChange }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        <div id="toggle-nav" onClick={toggleMenu} className="hidden-small">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <aside id="browse-aside" className={menuOpen ? "" : "hidden-small-aside"}>
            <nav id="main-nav">
                <ul id="nav-items" >
                    <li><Link to="/" onClick={() => onGenreChange("Best of 2024!")}>Home</Link></li>
                    <li><Link to="/about" onClick={() => onGenreChange("About")}>About</Link></li>
                    <li><Link to="/contact" onClick={() => onGenreChange("Contact")}>Contact</Link></li>
                </ul>
            </nav>
            
            <button><Link to="/login">Login/Sign Up</Link></button>
        </aside>
        </>
    );
};

export default AltAside;