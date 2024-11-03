import BookSummary from "../components/BookSummary";
import "../css/BookDescription.css"
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const BookDescription = () => {
    const [booksummary, setBookSummary] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://joy-lj.github.io/csce242/projects/part5/books.json");
            setBookSummary(response.data);
        })();
    },[]);

    return (
        <div id="main-content">
            <div id="background-div" className="columns">
                <div id="book-div">
                    <img id="book-image" src="images/bookcovers/tokillamockingbird.jpg"></img>
                    <p id="cite">@"To Kill a Mockingbird", goodreads, n.d.</p>
                    <div id="available-books">
                    {booksummary.slice(0,1).map((book)=>(

                        <BookSummary
                        availabilty={book.availabilty}
                        />
                    ))}
                    </div>
                    <button><Link to="/borrowedbook">Borrow</Link></button>
                </div>
                    
                <div id="book-info">
                {booksummary.slice(0,1).map((book)=>(
                   
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