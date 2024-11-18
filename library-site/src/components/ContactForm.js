import "../css/ContactForm.css";
import {useState} from "react";

const ContactForm = () => {
    const [result, setResult] = useState("");
      
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
      
        formData.append("access_key", "9ac42b14-d904-461d-83cb-aac44f894241");
      
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form sent!");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
    };
      
        return (
            <div id="form-map">
                <div id="contact-input" className="columns">
                    <h2>Contact Us</h2>
                    <form id="contact-form" onSubmit={onSubmit}>
                        <p>
                            <input type="text" name="name" id="name" placeholder="First and Last Name" required/>
                        </p>
                        <p>
                            <input type="email" name="email" id="email" placeholder="Email" required/>  
                        </p>
                        <p>
                            <textarea name="message" id="message" placeholder="Type your message..."required></textarea>  
                        </p>
              
                        <button type="submit">Submit Form</button>
      
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        );
      }

export default ContactForm;