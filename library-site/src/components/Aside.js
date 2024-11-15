import {Link} from "react-router-dom";
import "../css/Aside.css";
import {useState, useEffect} from 'react';
import AddBook from "./AddBook";
import axios from "axios";


const Aside = ({ onGenreChange }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [books, setBooks] = useState([]);


    useEffect(() => {
        (async () => {
          const response = await axios.get("https://library-site-backend.onrender.com/api/books/");
          setBooks(response.data);
        })();
      }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const updateBook = (book) => {
        setBooks((books=>[...books, book]));
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

            <button id="add-book" onClick={openAddDialog}>Add Book</button>
            {showAddDialog ? (
                <AddBook closeDialog={closeAddDialog} showNewBook={updateBook}/>

            ):("")}
        </aside>
        </>
    );
};

export default Aside;