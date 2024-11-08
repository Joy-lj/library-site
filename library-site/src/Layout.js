import {Outlet, useLocation} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

const Layout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const isSignUpPage = location.pathname === "/signup";
    const isReturnedbook = location.pathname === "/returnedbook";
    const isBorrowedbook = location.pathname === "/borrowedbook";
    const isBook = location.pathname === "/book";
    
    return (
        <>
            
            {!isLoginPage && !isSignUpPage && !isReturnedbook && !isBorrowedbook && !isBook && <Header />}

            <Outlet />
            {!isReturnedbook && !isBorrowedbook && !isBook && <Footer />}
        </>
    );
};

export default Layout;