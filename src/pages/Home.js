import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {Container, Carousel, Row, Col, Button} from 'react-bootstrap';
import carousel_one from "../img/carousel_one.jpg";
import carousel_two from "../img/carousel_two.jpg";
import carousel_three from "../img/carousel_three.jpg";

const Home = () => (
    <div className = "home">
        <div className = "body">
        <Container className = "banner">
            <h1>Hi, I'm Louie!</h1>
            <hr className="hrp"/>
            <p>I'm a Software Developer graduating in June 2022. I'm creating responsive websites, modern applications and beautiful interfaces. To find out more about me, click one of the relevant links below! </p>
        </Container>
        
        <Container className="nav-buttons">
            <Row >
                <Col className="Buttons" md={4} lg = {4}>
                    <a className = "homeButtons" href="/About"> Personal Experience</a>
                </Col >
                <Col className="Buttons"  md={4} lg = {4}> 
                    <a className = "homeButtons" href="/About#education">Education</a>
                </Col>
                <Col  className="Buttons" md={4} lg = {4}>
                    <a href="/Portfolio">My Porfolio</a>
                </Col>

                <Col  className="Buttons" md={4} lg = {4}>
                    <a href="/Contact">Contact / Socials</a>
                </Col>

                <Col  className="Buttons" md={4} lg = {4}>
                    <a href="/Blog">Personal Blog </a>
                </Col>
                <Col md={4} lg = {4}>
                    <a href="/About">Can't Choose? </a>
                </Col>
            </Row>
            <hr className="hrp"/>
      
        </Container>
        <Container className="qaboxes">
            <Row>
                <Col md={6} className="nav-buttons mauto">
                    <h2 className="large-text">What am I currently pursuing?</h2>
                </Col>
               <Col md={6} className="nav-buttons mauto">
                    <p className= "medium-text">Once I have finished my studies at Queen Mary University of London in Computer Science, I am looking to 
                        gather experience in the form of internships within the technology sector where I can develop my skils within Big Data, Artificial Intelligence and Neural Networks.
                    </p>
                </Col>
            </Row>
            <hr className="hrp"/>
        </Container>
        <Container className="qaboxes">
            <Row>
                
                <Col md={6} className="nav-buttons mauto">
                        <p className= "medium-text">
                            In terms of programming langauges I am confident within using Python, Java and Javascript. I am capable within web frameworks also, such as Ruby on Rails and React.js.
                            API's and uses of databases such as SQL and Firebase are common within my work and I am able to apply these within projects that I also develop.
                        </p>
                </Col>
                <Col md={6} className="nav-buttons mauto">
                        <h2 className="large-text">Which Technologies am I currently familiar with?</h2>
                    </Col>
            </Row>
            <hr className="hrp"/>
        </Container>
        <Container className="qaboxes">
            <Row>
                <Col md={6} className=" nav-buttons mauto Buttons">
                    <h2 className="large-text ">Interested in working with me / want to get in touch?</h2>
                    <hr className="hrp"/>
                </Col>
                <Col  className=" nav-buttons mauto Buttons " md={6} >
                    <a href="#home" className="Buttons">Get in contact</a>
                </Col>
            </Row>
        </Container>

        </div>
    </div>
)

export default Home;