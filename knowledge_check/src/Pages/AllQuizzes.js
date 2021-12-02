import './AllQuizzes.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';
//imports

const AllQuizzes = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('All Quizzes')); //Calls the reducer to change the name of the page to Home
    return(
    <div>All Quizes Page WIP</div>
    )
}
export default AllQuizzes;