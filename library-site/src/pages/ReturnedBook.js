import "../css/BorrowedBook.css";
import {Link} from "react-router-dom";

const ReturnedBook = () => {
    return ( 
        <div id="borrow-content">
            <div id="borrow-background">
                <h1>Your book has been successfully returned!</h1>
                <button id="viewlibrary"><Link to="/library">View Library</Link></button>
            </div>
        </div>
    );
};

export default ReturnedBook;