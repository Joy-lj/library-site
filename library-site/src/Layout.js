import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import LoginButton from "./components/LoginButton";

const Layout = () => {
    return (
        <>
            <Header />

            <Nav />

            <LoginButton />

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;