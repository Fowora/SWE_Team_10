import logo from './logo.svg';
import './App.css';
import {authentication} from "./firebase-config";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, {useState} from "react";
import {NavBar} from './Components/NavBar.js';
import HomePage from './Pages/HomePage.js';
import UserProfile from './Pages/UserProfile.js';
import {Routes, Route, Navigate} from 'react-router-dom';
import AllQuizzes from './Pages/AllQuizzes.js';
import CreateAQuiz from './Pages/CreateAQuiz.js';
import TakingAQuiz from './Pages/TakingAQuiz.js';


function App() {
    
    return (
        <div className="App">
            <NavBar />

           {/* <center><button onClick={signInWithGoogle}>
>>>>>>> Stashed changes
                Sign In
            </button></center> */}

            <div className="spacer"></div>
            <Routes>
                <Route path="/Home" element={<HomePage />} />
                <Route path="/UserProfile" element= {<UserProfile />} />
                <Route path="/TakingAQuiz" element={<TakingAQuiz />} />
                <Route path="/AllQuizzes" element= {<AllQuizzes />} />
                <Route path="/CreateAQuiz" element= {<CreateAQuiz />} />
                <Route path="*" element={<Navigate exact from ="/" replace to="/Home" />}/>
            </Routes>
        </div>
    );
}

export default App;
