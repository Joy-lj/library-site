import "../css/LibraryBooks.css";
import {Link} from "react-router-dom";


const LibraryBooks = (book) => {
    return (
        <section>
            <h3><Link to="/book">{book.name}</Link></h3>
            <p>{book.author}</p>
            <Link to="/book"><img src={book.image}/></Link>
            <p id="cite">{book.cite}</p>            
            <p id="expiration">{book.expiration}</p>
        </section>
    );
};

export default LibraryBooks;