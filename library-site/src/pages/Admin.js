import "../css/Admin.css";
import AdminAside from "../components/AdminAside";
import {useState, useEffect} from "react";
import AdminBooks from "../components/AdminBooks";
import AdminUsers from "../components/AdminUsers";
import axios from "axios";
import AddBook from "../components/AddBook";


const Admin = () => {
    const [section, setSection] = useState("Books");
    const [books, setBooks] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const handleAdminChange = (newSection) => {
        setSection(newSection);
    };

    useEffect(()=>{
        (async() => {
            const response = await axios.get(
                "https://library-site-backend.onrender.com/api/books/"
            );
            setBooks(response.data);
        })();
    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const updateBook = (book) => {
        setBooks((books)=>[...books, book]);
      };

    return (
        <div id="main-content">
            <div id="admin-header">
                    <h2>Admin</h2>    
            </div>

            <AdminAside onAdminChange={handleAdminChange}/>

            <section id="admin-section">
                <h1 id="admin-title"><strong>Admin Dashboard: {section}</strong></h1>
                    
                <div id="search-admin">
                    <input id="search" type="text" placeholder={`Search by ${section === "Books" ? "Title or Author" : "User Name or ID"}`}></input>
                </div>
                <button id="add-book" onClick={openAddDialog}>Add Book</button>
                {showAddDialog ? (
                    <AddBook closeDialog={closeAddDialog} showNewBook={updateBook}/>

                ):("")}
                    {section === "Books" ? (
                    <div id="book-div" className="book-container">
                        {books.map((book)=>(
                        <AdminBooks 
                        key={book.id}
                        id={book.id}
                        name={book.name} 
                        author={book.author}
                        image={book.image}
                        cite={book.cite}
                        availability={book.availability}
                        />
                        ))}
                    </div>
                ) : (
                    <AdminUsers />
                )}
            </section>
        </div>
    );
};

export default Admin;