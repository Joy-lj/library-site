import LibraryAside from "../components/LibraryAside";
import LibraryBookSection from "../components/LibraryBookSection";
import Search from "../components/Search";
import "../css/Library.css";
import {useState} from "react";

const Library = () => {

    const [title, setTitle] = useState("Your Library");
    const [showAside, setShowAside] = useState(true);

    const handleLibraryChange = (newTitle) => {
        setTitle(newTitle);
    };

    const toggleAside = () => {
        setShowAside(!showAside);
    };

    return (
        <>
            <div id="main-content">
                <Search />
                    
                <div id="toggle-nav" className="hidden-small-aside" onClick={toggleAside}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {showAside && <LibraryAside onLibraryChange={handleLibraryChange} />}

                <div id="library-content">
                    <div id="library-title">
                        <h1><strong>{title}</strong></h1>    
                    </div>
                    
                    <LibraryBookSection  />      
                </div>
                 
                
            </div>
            
        </>
    );
};

export default Library;