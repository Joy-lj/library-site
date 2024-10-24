import "../css/Header.css";

const Header = () => {
    return (
        <header>
            <h2><a id="main-text" href="#">Joy's Online Library</a></h2>
                <div id="account" class="columns">
                    <p><a href="#">Account</a></p>
                </div>
                <div id="search" class="columns">
                </div>
        </header>
    );
};

export default Header;