import "../css/LibraryBooks.css";
import {Link} from "react-router-dom";


const LibraryBooks = (librarybook) => {
    return (
        <section>
            <h3><Link to="/book">{librarybook.name}</Link></h3>
            <p>{librarybook.author}</p>
            <Link to="/book"><img src={"https://library-site-backend.onrender.com/images/bookcovers/" + librarybook.image}/></Link>
            <p id="cite">{librarybook.cite}</p>            
            <p id="expiration">{librarybook.expiration}</p>
        </section>
    );
};

export default LibraryBooks;