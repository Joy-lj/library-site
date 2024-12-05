import "../css/Dialog.css";
import React, { useState } from "react";

const EditBook = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    author: props.author,
    summary: props.summary,
    themes: props.themes,
    availability: props.availability,
    cite: props.cite,
    expiration: props.expiration,
    image: props.image,
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    console.log(...formData);
    const response = await fetch(`https://library-site-backend.onrender.com/api/books/${props._id}`,{
      method:"PUT",
      body:formData
    });

    if(response.status === 200){
      setResult("Book successfully updated");
      event.target.reset();
      props.updateBook(await response.json());
      props.closeDialog();
    } else {
      setResult("Error editing your book.");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Book Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                id="author"
                name="author"
                value={inputs.author || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="summary">Summary:</label>
              <textarea
                type="text"
                id="summary"
                name="summary"
                value={inputs.summary || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="themes">Themes (comma seperated):</label>
              <input
                type="text"
                id="themes"
                name="themes"
                value={inputs.themes || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="availability">Availability:</label>
              <input
                type="text"
                id="availability"
                name="availability"
                value={inputs.availability || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="cite">Cite:</label>
              <input
                type="text"
                id="cite"
                name="cite"
                value={inputs.cite || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="expiration">Expiration:</label>
              <input
                type="text"
                id="expiration"
                name="expiration"
                value={inputs.expiration || ""}
                onChange={handleChange}
                required
              />
            </p>

            <section className="columns">
              <p id="image-prev-section">
                <img
                  id="image-prev"
                  src={
                        typeof inputs.image === "string"
                        ? `https://library-site-backend.onrender.com/images/bookcovers/${inputs.image}`
                        : inputs.image instanceof File
                        ? URL.createObjectURL(inputs.image)
                        :""
                  }
                  alt=""
                />
              </p>
              <p id="image-upload">
                <label htmlFor="image">Upload Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
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

export default EditBook;
