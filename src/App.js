import React from 'react';
import TitleHeader from './components/TitleHeader';
import NavBar from "../src/components/navbar";
import Footer from './components/Footer';
import './App.css';

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
      <div className = "">
      
      
      <TitleHeader />
      <NavBar />


      
      </div>
      <Footer />
    </div>
  )
}

export default App;
