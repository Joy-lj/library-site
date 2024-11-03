import "../css/Login.css";
import LoginInputs from "../components/LoginInputs";
import {Link} from "react-router-dom";


const Login = () => {
    return (
        <section id="login-section">
        
        <header id="login-header">
            <h1>Login</h1>            
        </header>
        
        <LoginInputs />

        <div id="admin" className="center">
                <button><Link to="/admin">Admin Login</Link></button>
        </div>

        <div id="signup-div" className="center">
                <p>Don't have an account?</p>
                <button id="signup-button"><Link to="/signup">Sign Up</Link></button>
            </div>
        </section>
    );

};

export default Login;