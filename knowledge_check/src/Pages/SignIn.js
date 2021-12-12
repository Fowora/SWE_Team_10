import './SignIn.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';

const SignIn = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('SignIn')); //Calls the reducer to change the name of the page to Home
    return(
        <div>
            <div>This is the Sign Page</div>
        </div>
    )
}
export default SignIn;