import Aside from "../components/Aside";
import ContactForm from "../components/ContactForm";
import "../css/Contact.css";
import {useState} from "react";


const Contact = () => {
    const [selectedGenre, setSelectedGenre] = useState("Best of 2024!");

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };
    return (
        <>
            <div id="main-content">
                <Aside onGenreChange={handleGenreChange}/>
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