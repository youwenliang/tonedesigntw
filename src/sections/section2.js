import React, { Component } from 'react';
import Header from '../components/header.js';

class Section2 extends Component {
  render() {
    var sectionStyle = {
      background: "#ffffff"
    }
    return (
      <section className="section-2" style={sectionStyle}>
        <div className="content ph4 mw8 center">
          <Header title="Section 1"/>
        </div>
      </section>
    );
  }
}

export default Section2;
