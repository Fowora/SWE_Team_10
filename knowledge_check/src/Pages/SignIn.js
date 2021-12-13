import './SignIn.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';

const SignIn = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('SignIn')); //Calls the reducer to change the name of the page to Home

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication,provider)
            .then((re)=>{
                console.log(re)
                /*
                You can store the information (look at google API docs on how to call the variable)
                If you store them in local variables to this function using let, I can add them to the react store for you.
                */
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return(
        
        <div>
            <div>This is the Sign Page</div>
        </div>
    )
}
export default SignIn;