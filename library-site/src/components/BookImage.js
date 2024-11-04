import "../css/BookImage.css";

const BookImage = (book) => {
    return (
        <>
        <img src={book.image}></img>
        <p>{book.cite}</p>
        </>
    );
};

export default BookImage;