import "../css/BookSection.css";
import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import LibraryBooks from "./LibraryBooks";


const LibraryBookSection = () => {

    const [librarybooks, setLibraryBooks] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://library-site-backend.onrender.com/api/books");
            setLibraryBooks(response.data);
        })();
    },[]);

    return (
        <div id="book-div" className="book-container" >
            {librarybooks.map((librarybook)=>(
                <LibraryBooks
                key={librarybook.id}
                name={librarybook.name} 
                author={librarybook.author}
                image={librarybook.image}
                cite={librarybook.cite}
                expiration={`Expires in ${librarybook.expiration}!`}
                />
            ))}
        </div>
    );
};

export default LibraryBookSection;