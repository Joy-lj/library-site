import "../css/BookSection.css";
import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import LibraryBooks from "./LibraryBooks";


const LibraryBookSection = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://joy-lj.github.io/csce242/projects/part5/books.json");
            setBooks(response.data);
        })();
    },[]);

    return (
        <div id="book-div" class="book-container" >
            {books.map((book)=>(
                <LibraryBooks
                name={book.name} 
                author={book.author}
                image={`images/bookcovers/${book.image}`}
                cite={book.cite}
                expiration={`Expires in ${book.expiration}!`}
                />
            ))}
        </div>
    );
};

export default LibraryBookSection;