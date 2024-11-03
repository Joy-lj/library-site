import {Link} from "react-router-dom";
import "../css/Aside.css";
import React from 'react';


const Aside = ({ onGenreChange }) => {

    return (
        <aside id="browse-aside">
            <nav id="main-nav">
                <ul id="nav-items">
                    <li><Link to="/" onClick={() => onGenreChange("Best of 2024!")}>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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
    );
};

export default Aside;