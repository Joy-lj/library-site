import "../css/Books.css";
import { Link } from "react-router-dom";

const Books = (book) => {
    return (
        <div>
            <h3><Link to={`/bookdescription/${book._id}`}>{book.name}</Link></h3>
            <p>{book.author}</p>
            <Link to={`/bookdescription/${book._id}`}><img src={"https://library-site-backend.onrender.com/images/bookcovers/" + book.image}/></Link>
            <p id="cite-book">{book.cite}</p>            
            <p>Availability: {book.availability}</p>  
        </div>
    );
};

export default Books;