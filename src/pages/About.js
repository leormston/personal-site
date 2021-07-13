import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import personalphoto from '../img/personalphoto.jpg';
const About = () => (
    <div className="body medium-text">
        <Container>
        <div id="about">
            <h1 className="border-pink center">About Me</h1>
            <Row>
                <Col className="mauto">
                    <p className="vertical_align" >Hello! My name is Louie Ormston and I am currently a Third Year Computer Science Student at Queen Mary University Of London. 
                    I'm really passionate about all things data. This all comes from my first database project when I was just 16. I love building websites and mobile applications in my spare time and
                    hope somewhere in the near future I can do this as a job.</p>
                </Col>
                <Col md={5} lg={4}>
                <img className="portrait_photo" src={personalphoto}></img>
                </Col>
            </Row>
            
        </div>
        <div id="experience">
            <h1 className="border-pink center">Personal Experience</h1>
            <Row>
                <Col md={4} className="mauto">
                    <h2>Phlashweb - Technical Lead</h2>
                    <p>2020 - Part Time</p>
                </Col>
                <Col md={8}>
                    <br />
                        <p>
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
        <div id="education">
            <h1 className="border-pink center">Education</h1>
            <Row>
                <Col md={4}className="mauto">
                    <h2>Queen Mary University Of London</h2>
                    <p>2019-2022 (Current)</p>
                </Col>
                <Col md={8}>
                    <br />
                        <p>This is where I'm currently, the third year of my Undergraduate studies in Computer Science. In my final year I am focusing on Neural Networks / Deep Learning,
                             Security Engineering and Computer Graphics. My Project for my Final Year strays away from what my modules focus on as it ties into making a Plugin targeted at beginners
                             making music using Digital Audio Workspace's.
                        </p>
                        <p>Predicted: First Class BSC</p>


                </Col>
            </Row>
            <Row>
                <Col md={4}className="mauto">
                    <h2>CareerFoundry - Full Stack Web Development</h2>
                    <p>2016-2018</p>
                </Col>
                <Col md={8}>
                    <br />
                        <p>During my gap year I decided to take this course with CareerFoundry as I wanted to expand my skillset within Web Development. I became confident in both Front-End and Back-End 
                            Development. The framework I spent my time on during the 6 month period of this course was Ruby on Rails, which inspired me to become more proficient in other frameworks
                            such as React.js.
                        </p>
                        <p>Achieved: Course Completed</p>


                </Col>
            </Row>
            <Row>
                <Col md={4}className="mauto">
                    <h2>Littleover Sixth Form</h2>
                    <p>2016-2018</p>
                </Col>
                <Col md={8}>
                    <br />
                        <p>This is the sixth form where I completed my A levels. Here I studied Physics, Economics and Computer Science. This is where my passion for programming originated, during my 
                            second year coursework, where I developed a stock management system for a local company in my area.
                        </p>
                        <p>Achieved: Physics - B, Computer Science - B, Economics - B</p>


                </Col>
            </Row>
            
        </div>
        <div id="skills">
            <h1 className="border-pink center">What can Louie Do?</h1>
            <Row>
                <Col  className="mauto center">
                    <p>I have learned many applicable technical skills through many experiences and my education. In terms of programming languages for writing traditional programs, 
                        I am most confident within Java and Python as this is what has been taught to me through my A-Level Studies / University studies. Outside of this scope, I am comfortable using a variety
                         of frameworks such as React.js, React and Ruby on Rails. 
                        I am always willing to learn more, so I strive to increase my abilities every day, no problem is too big, nor too difficult as all problems are created with solutions to be developed.
                    </p>
                </Col>

            </Row>
            
        </div>
        </Container>
    </div>

)

export default About;