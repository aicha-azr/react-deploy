import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
          <Home />
          <About />
          <Resume /> 
          <Project />
          <Contact />
      </main>
    </>
  );
}

export default App;
