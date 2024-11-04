import BookSummary from "../components/BookSummary";
import "../css/BookDescription.css"
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import BookImage from "../components/BookImage";


const BookDescription = () => {
    const [booksummary, setBookSummary] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://joy-lj.github.io/csce242/projects/part5/books.json");
            setBookSummary(response.data);
        })();
    },[]);

    const [bookimage, setBookImage] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://joy-lj.github.io/csce242/projects/part5/books.json");
            setBookImage(response.data);
        })();
    },[]);

    return (
        <div id="main-content">
            <div id="background-div" className="columns">
                <div id="book-div">
                {bookimage.map((book)=>(
                    <BookImage 
                    image="images/bookcovers/tokillamockingbird.jpg"
                    />  
                ))}
                    
                    <div id="available-books">
                    {booksummary.map((book)=>(

                        <BookSummary
                        availabilty={book.availabilty}
                        />
                    ))}
                    </div>
                    <button><Link to="/borrowedbook">Borrow</Link></button>
                </div>
                    
                <div id="book-info">
                {booksummary.map((book)=>(
                    <BookSummary 
                    name={book.name}
                    author={book.author}
                    summary={book.summary}
                    />
                ))}
                </div>
        </div>
    </div>
    );
};

export default BookDescription;