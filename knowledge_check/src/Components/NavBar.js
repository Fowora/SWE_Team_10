import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Nav } from 'react-bootstrap';

const NavBar = (props)=> { 
return(
    <div>
        Test Navbar works
        <Navbar>    
            <Navbar.Offcanvas id="offCanvas Navbar">
                <GiHamburgerMenu />
            </Navbar.Offcanvas>
            <Nav.Link href ='/Home'>Home</Nav.Link>
                
        </Navbar>
    </div>
)}
export {NavBar};