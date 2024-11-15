import BookSummary from "../components/BookSummary";
import "../css/BookDescription.css"
import {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const BookDescription = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get("https://library-site-backend.onrender.com/api/books");
            const selectedBook = response.data.find((item) => item.id === parseInt(id,10));
            setBook(selectedBook);
        };
        fetchBook();
    }, [id]);

    if (!book) {
        return <p>Loading...</p>;
    }

    return (
        <div id="main-content">
            <div id="background-div" className="columns">
                <div id="book-div">
                    <img src={"https://library-site-backend.onrender.com/images/bookcovers/" + book.image}></img>  
                    
                    <div id="available-books">
                    <BookSummary
                    availability={book.availability} available
                    />
                    </div>
                    <button><Link to="/borrowedbook">Borrow</Link></button>
                </div>
                    
                <div id="book-info">
                    <BookSummary
                    name={book.name}
                    author={book.author}
                    summary={book.summary}
                    themes={book.themes}
                    />
                </div>
        </div>
    </div>
    );
};

export default BookDescription;