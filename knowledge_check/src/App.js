import './App.css';
import HomePage from './Pages/HomePage.js'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
         <Route path="/Home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
