import "../css/Books.css";
import { Link } from "react-router-dom";

const Books = (book) => {
    return (
        <section>
            <h3><Link to={`/bookdescription/${book.id}`}>{book.name}</Link></h3>
            <p>{book.author}</p>
            <Link to={`/bookdescription/${book.id}`}><img src={"http://localhost:3000/images/bookcovers/" + book.image}/></Link>
            <p id="cite">{book.cite}</p>            
            <p>Availability: {book.availability}</p>
        </section>
    );
};

export default Books;