import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useSelector} from 'react-redux';
import  {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Container, Offcanvas } from 'react-bootstrap';


const NavBar = (props)=> { 
    const pageName = useSelector(state => state.pageName );

    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showOffCanvas = () =>{
        <offCanvasKC placement = "start" />
    }

    return(
        <div> 
            <Navbar classname="navbar navbar-expand-lg" bg = "dark" expand={false}>  
                <Container fluid>  
                <Navbar.Toggle as={GiHamburgerMenu} aria-controls />
                <span className = "pageName"> {pageName} </span>
                    <Navbar.Offcanvas className="ONav" id='offCanvas Navbar' aria-labelledby="offcanvasNavbar" placement='start'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Knowledge Check</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <li className="NButtons" onClick={() => navigate('/AllQuizzes')}>Home</li>
                        <li className="NButtons" onClick={() => navigate('/AllQuizzes')}>All Quizzes</li>
                        <li className="NButtons" onClick={() => navigate('/CreateAQuiz')}>Create a Quiz</li>
                        <li className="NButtons" onClick={() => navigate('/UserProfile')}>User Profile</li>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>  
                    <span class="loginButton ms-auto">Login</span>
                </Container>
            </Navbar> 
        </div> 
    )// Route change not working yet smh
}
export {NavBar};