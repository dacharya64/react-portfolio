import React from 'react';
import Nav from '../components/Nav';
import About from '../components/About';
import Footer from '../components/Footer';
import Projects from './Projects'; 

function App() {

  return (
    <>
      <div className="container">
        <Nav />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App;
