import "../css/BookSection.css";
import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";
import AddBook from "./AddBook";

const BookSection = () => {
    const [books, setBooks] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{
        (async() => {
            const response = await axios.get(
                "https://library-site-backend.onrender.com/api/books/"
               // "http://localhost:3000/api/books/"
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
        setBooks((books=>[...books, book]));
      };
    

    return (
        <>
            <section id="book-section">
                <button id="add-book" onClick={openAddDialog}>Add Book</button>
                {showAddDialog ? (
                    <AddBook closeDialog={closeAddDialog} showNewBook={updateBook}/>

                ):("")}
                <div id="book-div" className="book-container" >
                    {books.map((book)=>(
                    <Books
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

                
            </section>
        
        </>
    );
};

export default BookSection;