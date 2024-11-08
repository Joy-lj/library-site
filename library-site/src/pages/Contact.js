import Aside from "../components/Aside";
import ContactForm from "../components/ContactForm";
import "../css/Contact.css";
import {useState} from "react";
import React, { useOutletContext } from "react-router-dom";


const Contact = () => {
    const [selectedGenre, setSelectedGenre] = useState("Best of 2024!");
    const [showAside, setShowAside] = useState(true);

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const toggleAside = () => {
        setShowAside(!showAside);
    };
    return (
        <>
            <div id="main-content">
            <div id="toggle-nav" className="hidden-small-aside" onClick={toggleAside}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            
                {showAside && <Aside onGenreChange={handleGenreChange} />}
                <div id="contact-content">
                    <h1>Contact</h1>
                    <p>Feel free to reach us at our email or number!</p>
                    <p>Email: joy.library@email.com</p>
                    <p>Phone #: (999)-999-9999</p>
                    <p>Below is the location of our office if needed!</p>
                    <ContactForm /> 
                </div>   
            </div>
        </>      
    );
};

export default Contact;