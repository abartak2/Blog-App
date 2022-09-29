import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// create function to log in to app using Google Authenticator from Firebase
function Login({ setIsAuth }) {
    let navigate = useNavigate();
// create signin auth and redirect to Home page
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

    // create the login button
    return (
    <div className="loginPage">
        <p>Sign In with Google</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}> 
            Sign in with Google</button>
    </div>
    );
}

export default Login;