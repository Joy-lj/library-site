
const BookSummary = (book) => {
    return (
        <section>
            <h2>{book.name}</h2>
            <h4>{book.author}</h4>
            <p>{book.summary}</p>
            <p>Availability: {book.availability}</p>
        </section>
    );
};  

export default BookSummary;