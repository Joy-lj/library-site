import Aside from "../components/Aside";
import BookSection from "../components/BookSection";
import Search from "../components/Search";
import "../css/Home.css";
import React, { useState } from 'react';


const Home = () => {
    const [selectedGenre, setSelectedGenre] = useState("Best of 2024!");

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };
    return (
            <div id="main-content">
                <Search />
                    
                <Aside onGenreChange={handleGenreChange}/>
                <div id="content">
                    <BookSection genre={selectedGenre}/> 
                </div>
                
                  
                
            </div>
    );
};

export default Home;