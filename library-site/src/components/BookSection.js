import "../css/BookSection.css";
import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";

const BookSection = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get(
                "https://library-site-backend.onrender.com/api/books/"
            );
            setBooks(response.data);
        })();
    },[]);

    return (
        <>
            <section id="book-section">
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