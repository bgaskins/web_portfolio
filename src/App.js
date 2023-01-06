import React from 'react';

import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import './App.css';



function App() {
  return (
   <main>
    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
   </main>
  );
}

export default App;
