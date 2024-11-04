import "../css/Admin.css";
import AdminAside from "../components/AdminAside";
import {useState} from "react";
import AdminBooks from "../components/AdminBooks";
import AdminUsers from "../components/AdminUsers";


const Admin = () => {
    const [section, setSection] = useState("Books");

    const handleAdminChange = (newSection) => {
        setSection(newSection);
    };

    return (
        <div id="main-content">
            <div id="admin-header">
                    <h2>Admin</h2>    
            </div>

        <AdminAside onAdminChange={handleAdminChange}/>

        <section id="admin-section">
                    <div id="admin-title">
                        <h1><strong>Admin Dashboard: {section}</strong></h1>
                    </div>
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