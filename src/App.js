import React, { Component } from 'react';
import Nav from './components/nav.js';
import Footer from './components/footer.js';

import Cover from './sections/cover.js';
import Section1 from './sections/section1.js';
import Section2 from './sections/section2.js';
import Section3 from './sections/section3.js';
import Section4 from './sections/section4.js';
import Clients from './sections/clients.js';
import Works from './sections/works.js';
import Contact from './sections/contact.js';
import Faq from './sections/faq.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Cover/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Clients/>
        <Works/>
        <Contact/>
        <Faq/>
        <Footer/>
      </div>
    );
  }
}

export default App;
