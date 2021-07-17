import React from 'react';
import {Container, Accordion, Row, Col, Button} from 'react-bootstrap'

function expandproject() {
    document.getElementsByClassName('hidden')[0].style.display='block';

    document.getElementsByClassName("expand")[0].setAttribute( "onClick", "javascript: minimiseproject();" );
} 

function minimiseproject() {
    document.getElementsByClassName('hidden')[0].style.display='none';

}
const Portfolio = () => (
    <div className="body medium-text">
        <Container>
            <h1 className="border-pink center">My Portfolio</h1>
            <p className="vertical_align" >This is my collection of applications and websites which either I have independently developed
            or, as part of a larger team, contributed towards. Some of these we completed in my free time, whilst others were completed as 
            duties within societies or university projects. </p>
            <Row className="shade-box shade-box-green dropdowneffect">
                <Container>
                    <Row>

                   
                <Col xs = {10}>
                    <h2 >Website Name  - Description of Application yadadadadadada</h2>
                </Col>
                <Col xs = {2}>
                    <Button className="expand" onClick={expandproject}>View More</Button>
                    <Button className="minimise" onClick={minimiseproject}>Hide</Button>

                </Col>
                </Row>
                <div className="hidden">
                <Row >
                   
                    <Col md={4} className="mauto">
                        <p className="">  Time of development</p>
                        <p className="">  Project Length</p>
                        <p className="">  Technologies Used</p>
                        <p className="">  Collaborative / Independent effort</p>

                    </Col>
                    <Col md={8} className="mauto">

                            <p className="">
                                In this role, I was given responsibility for many projects where I was involved heavily in both the management 
                            and technical aspects. It was vital to adjust and learn quickly as I worked in languages that I was not confident in, 
                            such as C, to help solve bugs or develop new features. Where I was confident (Python, HTML, Java, SQL, MongoDB) 
                            I helped the company take big strides and thought of ways we could implement these technologies to help increase 
                            the efficiency of our workflow. The most challenging part of the role was taking over poorly managed projects from clients 
                            where other developers had not commented or structured the code well. Exchanging expertise with other members of the team,
                            communicating with the client and being relentless with the desire to solve a problem helped make these tasks easier to complete. 
                            Technologies such as Zoom, Slack, Jira and many other online resources were a part of the daily workflow as I worked remotely 
                            for the entire period whilst employed at this company.
                            </p>
                    </Col>
                    
                </Row>
                </div>
                </Container>
            </Row>
        </Container>
    </div>

)

export default Portfolio;