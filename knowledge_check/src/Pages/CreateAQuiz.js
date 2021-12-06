import './CreateAQuiz.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';
//imports

const CreateAQuiz = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('Create A Quiz')); //Calls the reducer to change the name of the page to Home
    return(
    <div>
        <div>Create A Quiz Page</div>
        <div>random content</div>
    </div>
    )
}
export default CreateAQuiz;