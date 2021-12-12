import './AllQuizzes.css';
import {nameChange} from '../actions/Action.js';
import {useDispatch} from 'react-redux';
import {qData} from '../Components/MockQuizMetaData.js';

//imports

/*
Example variable names
qName: "React Principles",
    author: "X",
    category: "Computer Science",
    numQuestions: 2,
*/
const AllQuizzes = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('All Quizzes')); //Calls the reducer to change the name of the page to Home
    
    return(
    <div>
        <div className="AllQText">Featured Quizzes</div>
        <div className="QuizModules">
            {qData.map(quiz => { return(
                <div className="outerQuizRectangle">
                    <div className="quizContentText">{quiz.qName}</div>
                    <div className="quizContentText">By: {quiz.author}</div>
                    <div className="quizContentText">{quiz.category}</div>
                    <div className="quizQNums">{quiz.numQuestions}</div>
                </div>
            )})}
        </div>
        
    </div>
    )
}
export default AllQuizzes;