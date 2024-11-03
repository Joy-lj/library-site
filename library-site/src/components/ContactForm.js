import "../css/ContactForm.css";

const ContactForm = () => {
    return (
        <div id="form-map">
            <div id="contact-input" className="columns">
                <h2>Contact Us</h2>
                <form
                    id="contact-form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                >
                <input
                    type="hidden"
                    name="access_key"
                    value="2cc869cb-a5d4-4b4b-b609-7d0a0bd4ea78"
                />
                <p>
                    <input
                        id="name"
                        type="text"
                        placeholder="First and Last Name"
                        name="name"
                        required
                    />
                </p>
                <p>
                    <input id="email" type="email" placeholder="Email" name="email" required />
                </p>
                <p>
                    <textarea id="message" placeholder="Type your message..." name="message" required></textarea>
                </p>
                    <input
                        type="hidden"
                        name="redirect"
                        value="https://web3forms.com/success"
                    />
                    <input
                        type="hidden"
                        name="subject"
                        value="Contact from Joy's Online Library"
                    />
                    <input type="hidden" name="from_name" value="My Website" />
                        <p>
                            <button type="submit">Send Message</button>
                        </p>
                
                        <p id="result"></p>
                        </form> 
            </div>
        </div> 
    );
};

export default ContactForm;