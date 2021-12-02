import './TakingAQuiz.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';
//imports

const TakingAQuiz = () =>{
    
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('NameOfQuizWIP')); //Calls the reducer to change the name of the page to Home
    return(
    <div>Taking a Quiz Page WIP</div>
    )
}
export default TakingAQuiz;