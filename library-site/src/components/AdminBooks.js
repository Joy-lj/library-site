import "../css/Admin.css";

const AdminBooks = () => {
    return (
        <>
        <div id="admin-book" className="columns">
            <section className="one">
                <p>To Kill a Mockingbird</p>
                <p>Harper Lee</p>
                <div id="book-buttons">
                    <div>
                        <img src="https://library-site-backend.onrender.com/images/bookcovers/tokillamockingbird.jpg"></img>
                        <p id="cite">@"To Kill a Mockingbird", goodreads, n.d.</p>      
                    </div>                              
                    <div id="buttons-div">
                        <button id="add">Add</button>
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>   
                    </div>
                </div>
            </section>
            <section className="one">
                <p>Pride and Prejudice</p>
                <p>Jane Austin</p>
                <div id="book-buttons">
                    <div>
                        <img src="https://library-site-backend.onrender.com/images/bookcovers/prideandprejudice.jpg"></img>
                        <p id="cite">@"Pride and Prejudice", goodreads, n.d.</p>        
                    </div>                      
                    <div id="buttons-div">
                        <button id="add">Add</button>
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>   
                    </div>
                </div>
            </section>
        </div>

        <div id="admin-book" class="columns">
            <section className="one">
                <p>The Lord of the Rings</p>
                <p>J.R.R. Tolkien</p>
                <div id="book-buttons">
                    <div>
                        <img src="https://library-site-backend.onrender.com/images/bookcovers/lordoftherings.jpg"></img>
                        <p id="cite">@"The Lord of the Rings", goodreads, n.d.</p>    
                    </div>                            
                    <div id="buttons-div">
                        <button id="add">Add</button>
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>   
                    </div>
                </div>
                </section>
                <section className="one">
                    <p>Little Women</p>
                    <p>Louisa May Alcott</p>
                    <div id="book-buttons">
                        <div>
                            <img src="https://library-site-backend.onrender.com/images/bookcovers/littlewomen.jpg"></img>
                            <p id="cite">@"Little Women", goodreads, n.d.</p>     
                        </div>                            
                        <div id="buttons-div">
                        <button id="add">Add</button>
                        <button id="edit">Edit</button>
                        <button id="delete">Delete</button>   
                    </div>
                    </div>
                </section>
        </div>
        </>

    );
};

export default AdminBooks;