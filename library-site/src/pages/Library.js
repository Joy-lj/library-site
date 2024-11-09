import LibraryAside from "../components/LibraryAside";
import LibraryBookSection from "../components/LibraryBookSection";
import Search from "../components/Search";
import "../css/Library.css";
import {useState} from "react";

const Library = () => {

    const [title, setTitle] = useState("Your Library");

    const handleLibraryChange = (newTitle) => {
        setTitle(newTitle);
    };


    return (
        <>
            <div id="main-content">
                <Search />
                    
                <LibraryAside onLibraryChange={handleLibraryChange} />

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