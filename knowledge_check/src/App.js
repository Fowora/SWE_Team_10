import './App.css';
import {NavBar} from './Components/NavBar.js';
import HomePage from './Pages/HomePage.js';
import UserProfile from './Pages/UserProfile.js';
import React, { useState, useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import AllQuizzes from './Pages/AllQuizzes.js';
import CreateAQuiz from './Pages/CreateAQuiz.js';
import TakingAQuiz from './Pages/TakingAQuiz.js';
import LoginButton from './LoginButton.js';

function App() {
    const [user, setUser] = useState(null);

    return (
  <div className="App">
      <header className="App-header">
          <LoginButton setUser={(user) => setUser(user)}/>
          {user != null &&
          <p>Welcome, {user.displayName} ({user.email})</p>
          }
      </header>
      <NavBar />
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
  )
}
export default App;
