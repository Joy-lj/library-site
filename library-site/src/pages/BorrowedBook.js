import "../css/BorrowedBook.css";
import {Link} from "react-router-dom";

const BorrowedBook = () => {
    return (
        <div id="borrow-content">
            <div id="borrow-background">
                <h1>You have successfully borrowed this book!</h1>
                <button id="viewlibrary"><Link to="/library">View in Library</Link></button>
            </div>
        </div>
    );
};

export default BorrowedBook;