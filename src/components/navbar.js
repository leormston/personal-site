import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => (
    <div>
            <Navbar fixed = "top" collapseOnSelect expand="lg" className="nav navbar-default" bg="#1f1f1f" variant="dark" >
            <Navbar.Brand className = "header" href="/"><h3>LOUIE ORMSTON</h3></Navbar.Brand>
                {/* <div className="header">
                    <text>LOUIE ORMSTON</text>
                </div> */}
                <hr />
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav " className="justify-content-right" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav > 
              
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About Me</Nav.Link>
                    <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/Contact">Contact Me</Nav.Link>
                    <Nav.Link href="/Blogs">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
    </div>

);

export default NavBar;