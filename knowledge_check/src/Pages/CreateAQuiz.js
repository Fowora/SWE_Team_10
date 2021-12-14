import { useState, useEffect } from "react";
import "./CreateAQuiz.css";
import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import {useDispatch} from "react-redux";
import {nameChange} from "../actions/Action";


/*
Quiz{
    name: X's Quiz
    Question[]{
        answers[]
        correctAnswer = int
    }
}
 */
const CreateAQuiz = () =>{
    const dispatch = useDispatch(); // Makes dispatch more readable
    dispatch(nameChange('Create a Quiz')); //Calls the reducer to change the name of the page to Home

    const [newQuestion, setQuestion] = useState([""]);
    const [correctAnswer, setCorrectAnswer] = useState("");

    const [choice1,setChoice1] = useState("");
    const [choice2,setChoice2] = useState("");
    const [choice3,setChoice3] = useState("");
    const [choice4,setChoice4] = useState("");


    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "questions");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { question: newQuestion, correct: correctAnswer, answers: [choice1,choice2,choice3,choice4]} );
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "questions", id);
        await deleteDoc(userDoc);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <div className="CreateQuiz">          
            <input 
                className="QInputs"
                placeholder="Question..."
                onChange={(event) => {
                    setQuestion(event.target.value);
                }}
            />
            <br/><input
            className="QInputs"
            placeholder="Correct Answer"
            onChange={(event) => {
                setCorrectAnswer(event.target.value);
            }}
        />
            <br/><input  className="QInputs"
            placeholder="Choice 1"
            onChange={(event) => {
                setChoice1(event.target.value);
            }}
        />
            <br/><input  className="QInputs"
            placeholder="Choice 2"
            onChange={(event) => {
                setChoice2(event.target.value);
            }}
        />
            <br/><input  className="QInputs"
            placeholder="Choice 3"
            onChange={(event) => {
                setChoice3(event.target.value);
            }}
        />
            <br/><input  className="QInputs"
            placeholder="Choice 4"
            onChange={(event) => {
                setChoice4(event.target.value);
            }}
        />
            <br/><button onClick={createUser}> Save Question</button>
            
            {users.map((user) => {
                return (
                    <div className="Questions">
                        {" "}
                        <h1>Question: {user.question}</h1>
                        <h2>A: {user.answers[0]}</h2>
                        <h2>B: {user.answers[1]}</h2>
                        <h2>C: {user.answers[2]}</h2>
                        <h2>D: {user.answers[3]}</h2>
                        <button
                            onClick={() => {
                                deleteUser(user.id);
                            }} >
                            {" "}
                            Delete Question
                        </button>
                    </div>
                );
            })}
        </div>
    );
}


export default CreateAQuiz;
