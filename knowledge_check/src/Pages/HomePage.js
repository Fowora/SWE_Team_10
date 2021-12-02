import './HomePage.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';
import pic from '../Images/KCLogo.jpg'
//imports

const HomePage = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('Home Page')) //Calls the reducer to change the name of the page to Home
    return(
    <div class = 'flex-container'>
        <div className = 'Knowledge_Check'>Knowledge Check</div>
        <div className='MainPageContents'>
            <div><img class = 'KCLogoPic'src={pic} /></div>
            <div className="Ovals">
                <span className= "selectionOval1">
                    <span className= 'ovalText'>Go To Quizzes</span>
                </span>
                <span className= "selectionOval2">
                    <span className= 'ovalText'>CreateQuizzess</span>
                </span>
            </div>
        </div>
    </div>
    )
}
export default HomePage;