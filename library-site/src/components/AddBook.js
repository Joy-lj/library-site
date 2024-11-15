import "../css/Dialog.css";
import React, { useState } from "react";

const AddBook = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values)=>({...values,[name]:value}));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values)=>({...values,[name]:value}));
  };

  const addToServer = async(event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("https://library-site-backend.onrender.com/api/books/",{
      method:"POST",
      body:formData
    });

    if(response.status == 200){
      setResult("Book added!");
      props.showNewBook(await response.json());
      event.target.reset();
      props.closeDialog();
    } else {
      setResult("Error adding book");
    }
  };


  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="close-dialog" className="w3-button w3-display-topright" onClick={props.closeDialog}>
            &times;
          </span>
          <form id="add-property-form" onSubmit={addToServer}>
            <p>
              <label htmlFor="name ">Book Name:</label>
              <input type="text" id="name" name="name" required value={inputs.name || ""} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="author">Book Author:</label>
              <input type="text" id="author" name="author" required value={inputs.author || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="summary">Book Summary:</label>
              <input type="text" id="summary" name="summary" required value={inputs.summary || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="availability">Book Availability:</label>
              <input type="text" id="availability" name="availability" required value={inputs.availability || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="cite">Book Cite:</label>
              <input type="text" id="cite" name="cite" required value={inputs.cite || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="expiration">Book Expiration:</label>
              <input type="text" id="expiration" name="expiration" required value={inputs.expiration || ""} onChange={handleChange}/>
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange}/>
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
