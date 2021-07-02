import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => (
    
    <div className="footer">
        <Container>
            <Row className="justify-content-md-center"> 
                <Col xs={12} md="auto">
                    <a href="/"> Home</a>
                </Col>
                <Col xs={12} md="auto">
                    <a href="/About">About Me</a>
                </Col>
                <Col xs={12} md="auto">
                    <a href="/Portfolio"> Portfolio</a>
                </Col>
                <Col xs={12} md="auto"> 
                    <a href="/Contact">Contact Me</a>
                </Col>
                <Col xs={12} md="auto">
                    <a href="/Blog">Blog</a>
                </Col>
            </Row>
        </Container>
    
        <hr className = "whr"/>
        <p>Website Designed & Developed by Louie Ormston</p>
    </div>

);



export default Footer;