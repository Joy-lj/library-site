import "../css/Book.css";
import { Link } from "react-router-dom";
import BookImage from "../components/BookImage";
import {useState, useEffect} from "react";
import axios from "axios";

const Book = () => {
    return (
        <div id="content">
            <header id="book-header">
                <button id="library-button"><Link to="/library">Library</Link></button>
            </header>

            <div id="book">
                <div id="book-cover" className="column left">
                    <img src="images/bookcovers/tokillamockingbirdcover.jpg"></img>  
                    <p id="cite">@"To Kill a Mockingbird", goodreads, n.d.</p>
                </div>
                <div id="book-page" className="column right">
                    <h1>To Kill a Mockingbird</h1>
                    <p>"The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.</p>
                    <p>Compassionate, dramatic, and deeply moving, "To Kill A Mockingbird" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature (Goodreads, n.d.)"</p>
                    <div id="dedication">
                        <h2><strong>Dedication</strong></h2>
                        <p>"for Mr. Lee and Alice in consideration of Love & Affection Lawyers,</p>
                        <p>I supose, were children once" (Lee)</p>
                        <p>Charles Lamb</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;