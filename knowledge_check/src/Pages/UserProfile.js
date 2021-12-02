import './UserProfile.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';

const UserProfile = () => {
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('User Profile')) //Calls the reducer to change the name of the page to User Profile
    return(
        <div className = 'tempAnnouncer'>User Profile Page</div>
    )
}
export default UserProfile;