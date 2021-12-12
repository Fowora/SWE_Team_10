import './HomePage.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';
import pic from '../Images/KCLogo.jpg'
import {useNavigate} from 'react-router';
//imports


const HomePage = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('Home Page')) //Calls the reducer to change the name of the page to Home

    let navigate = useNavigate();

    return(
    <div class="container-fluid" id= 'HPContainer'>
        <center> <div className = 'Knowledge_Check'>Knowledge Check</div></center>
        <div className>
            <div><img class = 'KCLogoPic'src={pic} /></div>
            <div className="Ovals">
                <button className= "selectionOval1" onClick={() => navigate('/AllQuizzes')} >Go To Quizzes</button>
                <button className= "selectionOval2" onClick={() => navigate('/CreateAQuiz')}>Create Quizzes</button>
            </div>
        </div>
    </div>
    )
}
export default HomePage;