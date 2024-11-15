import {Link} from "react-router-dom";
import "../css/Aside.css";
import {useState, useEffect} from 'react';
import AddBook from "./AddBook";
import axios from "axios";


const Aside = ({ onGenreChange }) => {
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

            <nav id="browse-nav">
                <h4>Browse Genres</h4>
                    <ul>
                        <li><Link to="/" onClick={() => onGenreChange("Nonfiction")}>Nonfiction</Link></li>
                        <li><Link to="/" onClick={() => onGenreChange("Fantasy")}>Fantasy</Link></li>
                        <li><Link to="/"onClick={() => onGenreChange("Horror")}>Horror</Link></li>
                        <li><Link to="/" onClick={() => onGenreChange("Romance")}>Romance</Link></li>
                        <li><Link to="/" onClick={() => onGenreChange("Sci-fi")}>Sci-fi</Link></li>
                    </ul>
                <h4><Link to="/" onClick={() => onGenreChange("Recently Added")}>Recently Added</Link></h4>
            </nav>
            
            <button><Link to="/login">Login/Sign Up</Link></button>
        </aside>
        </>
    );
};

export default Aside;