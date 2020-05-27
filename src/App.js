import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
//import Projects from './components/project';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <Header/>
      <div className="container">
      <About/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
