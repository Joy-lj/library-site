import React from "react";

const BookSummary = ({ name, author, summary, themes, availability }) => {
    return (
        <section>
            <h2>{name}</h2>
            <h4>{author}</h4>
            <p>{summary}</p>
            <p>{availability}</p>
            <ul>
                {themes && themes.map((theme, index) => (
                    <li key={index}>{theme}</li>
                ))}
            </ul>
        </section>
    );
};

export default BookSummary;
