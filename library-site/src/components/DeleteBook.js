import "../css/Dialog.css";
import React, { useState } from "react";

const DeleteBook = (props) => {
  const [result, setResult] = useState("");

  const deleteBook = async() => {
   const response = await fetch(`https://library-site-backend.onrender.com/api/books/${props._id}`,{
    method:"DELETE"
   });

   if(response.status === 200){
    setResult("Book successfully deleted");
    props.hideBook();
    props.closeDialog();
   } else {
    setResult("Sorry, we couldn't delete your book at this time.");
   }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete {props.name}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>            
              <button onClick={deleteBook}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
