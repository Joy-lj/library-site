import "../css/BookSection.css";
import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import Books from "./Books";

const BookSection = ({ genre }) => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://joy-lj.github.io/csce242/projects/part5/books.json");
            setBooks(response.data);
        })();
    },[]);

    return (
        <>
            <div id="title">
                {genre === "Best of 2024!" ? (
                <>
                    <h2><strong>Explore Joy's Online Collection!</strong></h2>
                    <h3><strong>Best of 2024!</strong></h3>
                </>
                ) : (
                <h2><strong>{genre}</strong></h2>
                )}
            </div>
            <section id="book-section">
                <div id="book-div" className="book-container" >
                    {books.map((book)=>(
                    <Books
                    name={book.name} 
                    author={book.author}
                    image={`images/bookcovers/${book.image}`}
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