import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer.js';
import Portfolio from './Components/Portfolio';

import personalData from './Data/personalData';
import aboutData from './Data/aboutData';
import educationData from './Data/educationData';
import workData from './Data/workData';
import portfolioData from './Data/portfolioData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header personalData={personalData} />
        <About aboutData={aboutData} />
        <Resume educationData={educationData} workData={workData} />
        <Portfolio portfolioData={portfolioData} />
        <Footer personalData={personalData} />
      </div>
    );
  }
}

export default App;
