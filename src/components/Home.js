import './HomePage.css';
import React from 'react';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';
import pic from '../Images/KCLogo.jpg'
import {useNavigate} from 'react-router';


const HomePage = () =>{
    return(
        <div class="container-fluid" id= 'HPContainer'>
            {/*<h1> Knowledge Check</h1>*/}
            <center> <div className = 'Knowledge_Check'>Knowledge Check</div></center>

            <div className>
                <div><img class = 'KCLogoPic'src={pic} /></div>
                <div className="Ovals">
                    {<button className= "selectionOval1">Javid</button>}
                    {<button className= "selectionOval2">Javid</button>}

                    {/*<button className= "selectionOval1" onClick={() => navigate('/AllQuizzes')} >Go To Quizzes</button>*/}
                    {/*<button className= "selectionOval2" onClick={() => navigate('/CreateAQuiz')}>Create Quizzes</button>*/}
                </div>
            </div>
        </div>
    )
}
export default HomePage;
