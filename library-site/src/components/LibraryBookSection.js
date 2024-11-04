import "../css/BookSection.css";
import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import LibraryBooks from "./LibraryBooks";


const LibraryBookSection = () => {

    const [librarybooks, setLibraryBooks] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://joy-lj.github.io/csce242/projects/part5/books.json");
            setLibraryBooks(response.data);
        })();
    },[]);

    return (
        <div id="book-div" class="book-container" >
            {librarybooks.map((librarybook)=>(
                <LibraryBooks
                name={librarybook.name} 
                author={librarybook.author}
                image={`images/bookcovers/${librarybook.image}`}
                cite={librarybook.cite}
                expiration={`Expires in ${librarybook.expiration}!`}
                />
            ))}
        </div>
    );
};

export default LibraryBookSection;