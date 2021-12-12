import logo from './logo.svg';
import './App.css';
import {authentication} from "./firebase-config";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, {useState} from "react";

function App() {

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
        <div className="App">
            <button onClick={signInWithGoogle}>
                Sign In
            </button>

            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
            </header>
        </div>
    );
}

export default App;
