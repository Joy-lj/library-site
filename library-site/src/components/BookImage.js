import "../css/BookImage.css";

const BookImage = (book) => {
    return (
        <>
        <img src={"http://localhost:3000/images/bookcovers/" + book.image}></img>
        <p>{book.cite}</p>
        </>
    );
};

export default BookImage;