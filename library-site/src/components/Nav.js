import "../css/Nav.css";

const Nav = () => {
    return (
        <nav id="main-nav">
            <ul id="nav-items" class="columns hidden-small">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        
    );      
};

export default Nav;