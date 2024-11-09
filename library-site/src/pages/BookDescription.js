import BookSummary from "../components/BookSummary";
import "../css/BookDescription.css"
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const BookDescription = () => {


    return (
        <div id="main-content">
            <div id="background-div" className="columns">
                <div id="book-div">
                    <img src="http://localhost:3000/images/bookcovers/tokillamockingbird.jpg"></img>  
                    
                    <div id="available-books">
                        <p>3 out of 5 available</p>
                    </div>
                    <button><Link to="/borrowedbook">Borrow</Link></button>
                </div>
                    
                <div id="book-info">
                    <h2>To Kill a Mockingbird</h2>
                    <h4>Harper Lee</h4>
                    <p>summary...</p>
                    <p>themes...</p>
                </div>
        </div>
    </div>
    );
};

export default BookDescription;