import React, { Component } from 'react';
import Header from '../components/header.js';

class Section4 extends Component {
  render() {
    var sectionStyle = {
      background: "#f7f8fa"
    }
    return (
      <section className="section-4" style={sectionStyle}>
        <div className="content ph4 mw8 center">
          <Header title="Section 4"/>
        </div>
      </section>
    );
  }
}

export default Section4;
