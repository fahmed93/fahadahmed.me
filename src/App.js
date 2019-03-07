import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer.js';
import Portfolio from './Components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default App;
