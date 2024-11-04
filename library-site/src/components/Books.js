import "../css/Books.css";
import { Link } from "react-router-dom";

const Books = (book) => {
    return (
        <section>
            <h3><Link to="/bookdescription">{book.name}</Link></h3>
            <p>{book.author}</p>
            <Link to="/bookdescription"><img src={book.image} alt={`Cover of ${book.name}`}/></Link>
            <p id="cite">{book.cite}</p>            
            <p>Availability: {book.availability}</p>
        </section>
    );
};

export default Books;