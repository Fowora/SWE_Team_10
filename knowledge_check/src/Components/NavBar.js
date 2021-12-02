import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Nav, Container, Offcanvas } from 'react-bootstrap';
import {useSelector} from 'react-redux';
import { Route } from 'react-router-dom'
import  {useNavigate} from 'react-router-dom';

const NavBar = (props)=> { 
    const pageName = useSelector(state => state.pageName )

    let navigate = useNavigate();

    const handleClickHome = () =>{
        navigate('/home');
    }
    return(
        <div> 
            <Navbar classname="navbar" bg = "dark" expand={false}>  
                <Container fluid>  
                <Navbar.Toggle as={GiHamburgerMenu} aria-controls />
                    <Navbar.Offcanvas id="offCanvas Navbar" aria-labelledby="OffcanvasNavbar" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Knowledge Check</Offcanvas.Title>
                        </Offcanvas.Header>
                        <button onClick={() => navigate('/Home')}>Home</button>
                        <button onClick={() => navigate('/AllQuizzes')}>All Quizzes</button>
                        <button onClick={() => navigate('/CreateAQuiz')}>Create a Quiz</button>
                        <button onClick={() => navigate('/UserProfile')}>User Profile</button>
                    </Navbar.Offcanvas>  
                </Container>
               <div className = "pageName">{pageName}</div>
            </Navbar> 
        </div> 
    )// Route change not working yet smh
}
export {NavBar};