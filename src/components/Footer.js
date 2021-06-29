import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => (
    
    <div className="footer">
        <Container>
            <Row className="justify-content-md-center"> 
                <Col xs={12} md="auto">
                    <a>Home</a>
                </Col>
                <Col xs={12} md="auto">
                    <a>About Me</a>
                </Col>
                <Col xs={12} md="auto">
                    <a>Portfolio</a>
                </Col>
                <Col xs={12} md="auto"> 
                    <a>Contact Me</a>
                </Col>
                <Col xs={12} md="auto">
                    <a>Blog</a>
                </Col>
            </Row>
        </Container>
    
        <hr className = "whr"/>
        <p>Website Designed & Developed by Louie Ormston</p>
    </div>

);



export default Footer;