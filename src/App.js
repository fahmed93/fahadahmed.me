import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer.js';
import Portfolio from './Components/Portfolio';

import data from './Data/data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header personalData={data.personalData} />
        <About aboutData={data.aboutData} />
        <Resume educationData={data.educationData} workData={data.workData} />
        <Portfolio portfolioData={data.portfolioData} />
        <ContactMe />
        <Footer personalData={data.personalData} />
      </div>
    );
  }
}

export default App;
