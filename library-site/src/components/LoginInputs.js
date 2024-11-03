import "../css/LoginInputs.css";

const LoginInputs = () => {
    return (

    <>
        <div id="firstname" class="center">
            <input id="firstname-bar" type="text" placeholder="First Name"></input>
        </div>    
        <div id="lastname" class="center">
            <input id="lastname-bar" type="text" placeholder="Last Name"></input>
        </div>
        <div id="email" class="center">
            <input id="email-bar" type="text" placeholder="Email"></input>
        </div>
        <div id="password" class="center">
            <input id="password-bar" type="text" placeholder="Password"></input>
        </div>
    </>
    );    
};

export default LoginInputs;
