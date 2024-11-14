import "../css/About.css";
import Aside from "../components/Aside";
import {Link} from "react-router-dom";
import {useState} from "react";
import AltAside from "../components/AltAside";

const About = () => {
    const [selectedGenre, setSelectedGenre] = useState("Best of 2024!");

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };
    return (          
        <div id="main-content">
            <AltAside onGenreChange={handleGenreChange} />
            <div id="about-content">
                <h1 id="about-title">About</h1>
            <div id="about-div">
                <img src="https://library-site-backend.onrender.com/images/about-pic.jpg"></img>
                <div id="about-text">
                    <p>Welcome to Joy's Online Library. This platform is designed for readers around the world. It offers an extensive collection of books, spanning numerous genres. Whether you're diving into fiction, conducting research, or exploring new areas of interest, this library provides easy access to materials tailored to your needs. With its  user-friendly navigation and robust search engine, finding you next read is effortless.</p>
                    <p>Our mission is to make knowledge accessible to everyone, no matter where they are. It is continuously updated with the latest publications, ensuring a diverse and current selection. Joy's Online Library is committed to fostering a community of book lovers and readers. Join today and unlock the endless possibilities of a world of knowledge at you fingertips!</p>   
                </div>
            </div>
                <h1 id="join"><Link to="/signup">Join Us Today!</Link></h1>
            </div>
        </div>            
    );
};

export default About;