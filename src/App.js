import React, { Component } from 'react';
import Footer from './components/footer.js';
import Scroll from './components/scroll.js';

import Cover from './sections/cover.js';
import Section1 from './sections/section1.js';
import Section2 from './sections/section2.js';
import Section3 from './sections/section3.js';
import Section4 from './sections/section4.js';
import Clients from './sections/clients.js';
import Works from './sections/works.js';
import Contact from './sections/contact.js';
import Faq from './sections/faq.js';

import data from './data/data.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data["topic1"]
    };
  }
  render() {
    return (
      <div className="App">
        {/*<Nav/>*/}
        <Scroll/>
        <Cover data={this.state.data}/>
        <Section1 data={this.state.data}/>
        <Section2 data={this.state.data}/>
        <Section3 data={this.state.data}/>
        <Section4 data={this.state.data}/>
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
