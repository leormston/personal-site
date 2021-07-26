import React,  { useState, useEffect, Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import stock from '../img/stock.png';
import firebase from 'firebase';
import {Link} from "react-router-dom";
//import { db } from "../louieormstonfire.js";

const Blogs = () => {

    return(
    <div className="body medium-text">
        <Container>
            <h1 className="border-pink center">My Blog</h1>
            <p className="vertical_align" >Thank you so much for taking the time to visit my blog. This is a place where I like to talk about topics I am passionate about within 
            computer science and its surrounding industries. This is entirely my own opinion and does not reflect any organisations or societies I am involved with. I hope you enjoy
            what I have written and come back to view new articles I have wrote. I will (try to) write new blogs weekly.</p>
            <br/>
            
            <h2 className="border-pink ">New Posts</h2>            
            <Row className="blog-mini">
                <Col sm={3}>
                    <img className="blog-mini-image" src={stock}/>
                </Col>
                <Col sm={9}>
                    <h2 >More Blogs Are Coming Soon</h2>
                    <p>Give it a week or two and more content shall arrive</p>
                    <p>TBD</p>
                </Col>
            </Row>
            <br/>
            <Row className="blog-mini">
                <Col sm={3}>
                    <img className="blog-mini-image" src={stock}/>
                </Col>
                <Col sm={9}>
                    <h2 >More Blogs Are Coming Soon</h2>
                    <p>No blogs currently exist, but they will in the future</p>
                    <p>TBD</p>
                </Col>
            </Row>

        </Container>
    </div>
    )
    }

export default Blogs;