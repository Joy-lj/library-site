import "../css/Aside.css";

const Aside = () => {
    return (
        <aside id="browse-aside" class="one hidden-small-aside">
            <nav id="browse-nav">
                <h4>Browse Genres</h4>
                <ul>
                    <li><a href="nonfiction.html">Nonfiction</a></li>
                    <li><a href="fantasy.html">Fantasy</a></li>
                    <li><a href="horror.html">Horror</a></li>
                    <li><a href="romance.html">Romance</a></li>
                    <li><a href="scifi.html">Sci-fi</a></li>
                </ul>
                <h4><a href="recent.html">Recently Added</a></h4>
            </nav>
        </aside>
    );
};

export default Aside;