import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => (
    <div>
            <Navbar collapseOnSelect expand="lg" className="nav justify-content-center" bg="dark" variant="dark" >
                <Nav > 
                <Navbar.Toggle aria-controls="responsive-navbar-nav " className="justify-content-right" />
                <Navbar.Collapse id="responsive-navbar-nav">
              
                    <Nav.Link href="/planner">Home</Nav.Link>
                    <Nav.Link href="/settings">About Me</Nav.Link>
                    <Nav.Link href="/settings">Portfolio</Nav.Link>
                    <Nav.Link href="/settings">Contact Me</Nav.Link>
                    <Nav.Link href="/settings">Blog</Nav.Link>
            
                </Navbar.Collapse>
                </Nav>
            </Navbar>
    </div>

);

export default NavBar;