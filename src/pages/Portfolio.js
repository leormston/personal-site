import React from 'react';
import {Container, Accordion, Row, Col, Button, Carousel} from 'react-bootstrap'
import { faReact, faHtml5, faJsSquare,faPython, faJava, faAndroid, faGithub, faLinux, faPhp, faNodeJs, faNpm, faCss3} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import weather1 from '../img/weather1.png';
import weather2 from '../img/weather2.png';
import weather3 from '../img/weather3.png';
import wellbeing1 from '../img/wellbeing1.png';
import wellbeing2 from '../img/wellbeing2.png';
import wellbeing3 from '../img/wellbeing3.png';
import hyperlink1 from '../img/hyperlink1.png';
import hyperlink2 from '../img/hyperlink2.png';
import lows1 from '../img/louieormstonws1.png';
import lows2 from '../img/louieormstonws2.png';
import lows3 from '../img/louieormstonws3.png';

const Portfolio = () => (
    <div className="body medium-text">
        <Container>
            
            <h1 className="border-pink center">My Portfolio</h1>
            <h3 className="vertical_align" >This is my collection of applications and websites which either I have independently developed
            or, as part of a larger team, contributed towards. Some of these I completed in my free time, whilst others were completed as 
            duties within societies or university projects. </h3>
            
            <Row>
            <Container className="shade-box shade-box-green">
                
                    <h2 className="center">Wellbeing and Support Mobile App</h2>
                    <hr/>
                    <Row>
                    <Col md={6} className="showcase"> 
                    
                        <Carousel className="carousel mauto">
                            <Carousel.Item interval={2000}>
                                <img
                                className="portrait_port"
                                src={wellbeing1}
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item  interval={2000}>
                                <img
                                className="portrait_port mauto"
                                src={wellbeing2}
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                className="portrait_port"
                                src={wellbeing3}
                                alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6}>
                        <h3>Overview: </h3>
                        <p>This Mobile Application was developed for FDM as a part of a student project within university. The application supported the tracking of steps,
                            communication with other members, tracking calories and booking appointments with mental health champions.
                        </p>
                        <hr / >
                        <h3>Technical Details: </h3>
                        <p>We created this application using React Native so that it would work on both Android and IOS. Firebase was used for the database. Several Node modules
                            were also used.
                        </p>
                        <hr/>
                        <h3>Technologies Used: </h3>
                        <p> 
                            <FontAwesomeIcon className="icon lil-padding" icon={faReact} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faNodeJs} />
                          
                           
                            <FontAwesomeIcon className="icon lil-padding"icon={faNpm} />
            
                            <FontAwesomeIcon className="icon lil-padding" icon={faLinux} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faAndroid} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faJsSquare} />
                        </p>
                    </Col>
                    </Row>
            </Container>
            </Row>
            <Row>
            <Container className="shade-box shade-box-green">
                
                    <h2 className="center">This Website</h2>
                    <hr/>
                    <Row>
                    <Col md={6} className="showcase"> 
                    
                        <Carousel className="carousel mauto">
                            <Carousel.Item interval={2000}>
                                <img
                                className="landscape_port_2"
                                src={lows1}
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item  interval={2000}>
                                <img
                                className="landscape_port_2  mauto"
                                src={lows2}
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                className="portrait_port"
                                src={lows3}
                                alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6}>
                        <h3>Overview: </h3>
                        <p>This is the website you are looking at now. It's primarily used for showcasing my skills and sharing blogs that I have written. Developed by myself for myself.
                        </p>
                        <hr / >
                        <h3>Technical Details: </h3>
                        <p>To create this application I used React.js and Bootstrap. For the rest of the styling I used CSS.
                        </p>
                        <hr/>
                        <h3>Technologies Used: </h3>
                        <p> 
                            <FontAwesomeIcon className="icon lil-padding" icon={faReact} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faNodeJs} />
                            <FontAwesomeIcon className="icon lil-padding"icon={faNpm} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faLinux} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faAndroid} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faJsSquare} />
                        </p>
                    </Col>
                    </Row>
            </Container>
            </Row>
            <Row>
            <Container className="shade-box shade-box-green">
                
                    <h2 className="center">Athletic Weather App</h2>
                    <hr/>
                    <Row>
                    <Col md={6} className="showcase"> 
                    
                        <Carousel className="carousel mauto">
                            <Carousel.Item interval={2000}>
                                <img
                                className="portrait_port"
                                src={weather1}
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item  interval={2000}>
                                <img
                                className="landscape_port mauto"
                                src={weather2}
                                alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                className="portrait_port"
                                src={weather3}
                                alt="Third slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6}>
                        <h3>Overview: </h3>
                        <p>This is a specialised weather application targeted towards athletes who's activities depend heavily on weather forecasts.
                            The application provided a streamlined interface for quickly gathering information about the weather.
                        </p>
                        <hr / >
                        <h3>Technical Details: </h3>
                        <p>To create this application I used React.js, Bootstrap and API technology. I worked in a team with 3 other colleagues to design and 
                            develop this application
                        </p>
                        <hr/>
                        <h3>Technologies Used: </h3>
                        <p> 
                            <FontAwesomeIcon className="icon lil-padding" icon={faReact} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faNodeJs} />
                          
                           
                            <FontAwesomeIcon className="icon lil-padding"icon={faNpm} />
            
                           
                            <FontAwesomeIcon  className="icon lil-padding" icon={faCss3} />
                        
                                    
                            <FontAwesomeIcon className="icon lil-padding" icon={faHtml5} />
                           
                        </p>
                    </Col>
                    </Row>
            </Container>
            </Row>
            <Row>
            <Container className="shade-box shade-box-green">
                
                    <h2 className="center">HyperLink Website</h2>
                    <hr/>
                    <Row>
                    <Col md={6} className="showcase"> 
                    
                        <Carousel className="carousel mauto">
                            <Carousel.Item interval={2000}>
                                <img
                                className="landscape_port_2 "
                                src={hyperlink1}
                                alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item  interval={2000}>
                                <img
                                className="landscape_port_2 mauto"
                                src={hyperlink2}
                                alt="Second slide"
                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6}>
                        <h3>Overview: </h3>
                        <p>HyperLink is a society aiming to build and create a working hyperloop pod prototype to present at the European HyperLoop Week. This website was created
                            by the software engineernig team, which I am a part of.
                        </p>
                        <hr / >
                        <h3>Technical Details: </h3>
                        <p>This site was built using HTML and JavaScript. Styled via CSS.
                        </p>
                        <hr/>
                        <h3>Technologies Used: </h3>
                        <p> 
                            <FontAwesomeIcon className="icon lil-padding" icon={faCss3} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faLinux} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faHtml5} />
                            <FontAwesomeIcon className="icon lil-padding" icon={faJsSquare} />
                        </p>
                        <hr/>
                        <h3>Link</h3>
                        <a className="nostyle-link" target="_blank" href="https://hyperlinklondon.com/#">https://hyperlinklondon.com/</a>
                    </Col>
                    </Row>
            </Container>
            </Row>
            

            <h1 className="border-pink center">Technologies Used</h1>
                <Row>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faReact} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon  icon={faHtml5} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faJsSquare} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faPython} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faJava} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faAndroid} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faGithub} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faLinux} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faPhp} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faNodeJs} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faNpm} />
                    </Col>
                    <Col className="icon"xs={4} sm={3} md={2}> 
                    <FontAwesomeIcon icon={faCss3} />
                    </Col>
                </Row>
                
                
                
                
                
                
                
                
                
                
                
                
        </Container>
    </div>

)

export default Portfolio;