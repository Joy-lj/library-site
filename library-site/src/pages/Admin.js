import "../css/Admin.css";
import AdminAside from "../components/AdminAside";
import {useState} from "react";
import AdminBooks from "../components/AdminBooks";
import AdminUsers from "../components/AdminUsers";


const Admin = () => {
    const [section, setSection] = useState("Books");
    const [showAside, setShowAside] = useState(true);

    const toggleAside = () => {
        setShowAside(!showAside);
    };


    const handleAdminChange = (newSection) => {
        setSection(newSection);
    };

    return (
        <div id="main-content">
            <div id="admin-header">
                    <h2>Admin</h2>    
            </div>

            <div id="toggle-nav" className="hidden-small-aside" onClick={toggleAside}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        {showAside && <AdminAside onAdminChange={handleAdminChange}/>}

            <section id="admin-section">
                <h1 id="admin-title"><strong>Admin Dashboard: {section}</strong></h1>
                    
                <div id="search-admin">
                    <input id="search" type="text" placeholder={`Search by ${section === "Books" ? "Title or Author" : "User Name or ID"}`}></input>
                </div>

                    {section === "Books" ? (

                    <AdminBooks />
                ) : (
                    <AdminUsers />
                )}
            </section>
        </div>
    );
};

export default Admin;