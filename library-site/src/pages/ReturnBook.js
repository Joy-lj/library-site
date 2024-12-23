import "../css/ReturnBook.css";
import {Link} from "react-router-dom";

const ReturnBook = () => {
    return (
        <div id="returnbackground-div">
            <div id="returnbook-div">
                <img id="book-image" src="https://library-site-backend.onrender.com/images/bookcovers/tokillamockingbird.jpg"></img>
                <p id="cite-book">@"To Kill a Mockingbird", goodreads, n.d.</p>
                <h2>To Kill a Mockingbird</h2>
                <h2>Harper Lee</h2>
                <button id="return-book"><Link to="/returnedbook">Return Book</Link></button>
            </div>
        </div>
    );
};

export default ReturnBook;