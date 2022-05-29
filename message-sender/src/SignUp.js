import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SignUp(){
    return <div className="signUp">
        <h1>Sign in</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <FontAwesomeIcon icon="fa-solid fa-eye" />
        <a href="#">Forgot Password</a>
        <button>Sign In</button>
    </div>
}

export default SignUp;