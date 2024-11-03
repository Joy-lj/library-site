
const BookSummary = (book) => {
    return (
        <section>
            <h3>{book.name}</h3>
            <h4>{book.author}</h4>
            <p>{book.summary}</p>
            <p>Availability: {book.availability}</p>
        </section>
    );
};  

export default BookSummary;