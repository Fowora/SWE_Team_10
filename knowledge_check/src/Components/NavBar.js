import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useSelector} from 'react-redux';
import  {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

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

<Navbar bg="light" expand={true}>
  <Container fluid>
    <Navbar.Toggle as={GiHamburgerMenu} aria-controls="OffCanvasNavbar" toggleNavKey= {1} />
    <span className="pageName">{pageName}</span>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body key = {1}>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>



            {/* <Navbar classname="navbar navbar-expand-lg" bg = "dark" expand={false}>  
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
            </Navbar>  */}
        </div> 
    )// Route change not working yet smh
}
export {NavBar};