import "../css/Admin.css";
import { useState } from "react";
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";
import { Link } from "react-router-dom";


const AdminBooks = (props) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [book, setBook] = useState(props);
    const [showBook, setShowBook] = useState(true);
  
    const openEditDialog = () => {
      setShowEditDialog(true);
    };
  
    const closeEditDialog = () => {
      setShowEditDialog(false);
    };
  
    const openDeleteDialog = () => {
      setShowDeleteDialog(true);
    };
  
    const closeDeleteDialog = () => {
      setShowDeleteDialog(false);
    };
  
    const hideBook = () => {
      setShowBook(false);
    }
  
    const editBook = (newBook) => {
      setBook(newBook);
    };  
    return (
        <>
            {showBook ? (
            <div>
                {showDeleteDialog ? (
                    <DeleteBook
                    closeDialog={closeDeleteDialog}
                    hideBook = {hideBook}
                    name={book.name}
                    id={book.id}
                    />
                ) : (
                 ""
            )}

            {showEditDialog ? (
                <EditBook
                closeDialog={closeEditDialog}
                updateBook = {editBook}
                id={book.id}
                name={book.name}
                author={book.author}
                image={book.image}
                summary={book.summary}
                availability={book.availability}
                cite={book.cite}
                expiration={book.expiration}
                />
            ) : (
                ""
            )}
            <section className="book columns">
                <section className="feature-image">
                    <img
                        src={"https://library-site-backend.onrender.com/images/bookcovers/" + book.image}
                        alt={book.name}
                    />
                </section>
                <section className="info">
                    <header className="columns">
                        <h3>{book.name}</h3>
                        <section id="change-buttons">
                            <a href="#" onClick={openEditDialog}>
                            &#9998;
                            </a>
                            <a href="#" onClick={openDeleteDialog}>
                            &#x2715;
                            </a>
                        </section>
                    </header>
                    </section>
                </section>
            </div>
            ) : (
            ""
            )}
        </>
    );
};

export default AdminBooks;