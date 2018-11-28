import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects'
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import Home from './components/home';

class App extends Component {
  render() {
    return (
        <div>
            <Home />
            <About />
            <Projects />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
  }
}

export default App;
