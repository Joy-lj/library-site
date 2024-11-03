import {Link} from "react-router-dom";
import "../css/Header.css";

const Header = () => {

    return (
        <header>
            <h2><Link to="/">Joy's Online Library</Link></h2>
            <p id="account"><Link to="/library">Account</Link></p>
        </header>
    );
};

export default Header;