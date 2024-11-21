import "../css/LoginInputs.css";

const LoginInputs = () => {
    return (

    <>
        <div id="firstname" className="center">
            <input id="firstname-bar" type="text" placeholder="First Name"></input>
        </div>    
        <div id="lastname" className="center">
            <input id="lastname-bar" type="text" placeholder="Last Name"></input>
        </div>
        <div id="email" className="center">
            <input id="email-bar" type="text" placeholder="Email"></input>
        </div>
        <div id="password" className="center">
            <input id="password-bar" type="text" placeholder="Password"></input>
        </div>
    </>
    );    
};

export default LoginInputs;
