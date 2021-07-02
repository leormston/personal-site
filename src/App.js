import React from 'react';
import TitleHeader from './components/TitleHeader';
import NavBar from "../src/components/navbar";
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Socials from './pages/Socials';
import Blog from './pages/Blog';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
//i love apples
const App = () => {
  return (
    <div className="App background">
      <NavBar />

      <Router>
        <Switch>
        
        <Route path="/About" component={About}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Contact" component={Socials}/>
        <Route path="/Blog" component={Blog}/>
        <Route path="/" component={Home}/>
        
        </Switch>
      </Router>
      


      <Footer />
    </div>
  )
}

export default App;
