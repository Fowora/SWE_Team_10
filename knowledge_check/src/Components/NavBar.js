import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {Container, Offcanvas } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import  {useNavigate} from 'react-router-dom';
import {useState} from 'react';


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
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <span onclick={showOffCanvas} className="HNavIcon"><GiHamburgerMenu /></span>
                <span className = "pageName"> {pageName} </span>
                    <Navbar.Offcanvas className="ONav" id='offcanvasNavbar' aria-labelledby="offcanvasNavbar" placement= 'end'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasnavbarLabel">Knowledge Check</Offcanvas.Title>
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