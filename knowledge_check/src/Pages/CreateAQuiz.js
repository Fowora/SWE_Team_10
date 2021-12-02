import './CreateAQuiz.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';
//imports

const CreateAQuiz = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('Create A Quiz')); //Calls the reducer to change the name of the page to Home
    return(
    <div>Create A Quiz</div>
    )
}
export default CreateAQuiz;