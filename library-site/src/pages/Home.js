import Aside from "../components/Aside";
import BookSection from "../components/BookSection";
import Search from "../components/Search";
import "../css/Home.css";
import React, { useState, useEffect} from 'react';


const Home = () => {
    const [genre, setSelectedGenre] = useState("Best of 2024!");
    const [showAside, setShowAside] = useState(true);

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    const toggleAside = () => {
        setShowAside(!showAside);
    };


    return (
            <div id="main-content">
                <Search />
                    
                <div id="toggle-nav" className="hidden-small-aside" onClick={toggleAside}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            
                {showAside && <Aside onGenreChange={handleGenreChange} />}
                <div id="content">
                    <div id="title">
                        {genre === "Best of 2024!" ? (
                        <>
                            <h2><strong>Explore Joy's Online Collection!</strong></h2>
                            <h3><strong>Best of 2024!</strong></h3>
                        </>
                        ) : (
                        <h2><strong>{genre}</strong></h2>
                        )}
                    </div>
                
                    <BookSection/> 
                </div>
                
                  
                
            </div>
    );
};

export default Home;