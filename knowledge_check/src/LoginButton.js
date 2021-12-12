import React from 'react';
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {authentication} from "./firebase-config";

// function LoginButton({setUser}) {
function LoginButton() {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication,provider)
            .then((re)=>{
                console.log(re)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
       <button onClick={signInWithGoogle}>
            Sign In
        </button>
    );

}

export default LoginButton;

