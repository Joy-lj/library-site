import BookSummary from "../components/BookSummary";
import "../css/BookDescription.css"
import {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


const BookDescription = () => {
    const { id } = useParams();  // Get the book ID from the URL
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get("https://joy-lj.github.io/csce242/projects/part5/books.json");
            const selectedBook = response.data.find((item) => item.id === id);
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
                    <img src={"http://localhost:3000/images/bookcovers/" + book.image}></img>  
                    
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