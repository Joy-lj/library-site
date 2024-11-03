import LoginInputs from "../components/LoginInputs";
import "../css/SignUp.css";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <section id="signup-section">
            <header id="login-header" className="center">
                <h1>Welcome to Joy's Online Library</h1>
            </header>
            
            <div id="signup" className="center">
                <h2>Sign Up Here</h2>
            </div>

            <LoginInputs />

            <div id="signup" className="center">
                <button id="signup-button"><Link to="/library">Sign Up</Link></button>
            </div>
        </section>
    );
};

export default SignUp;