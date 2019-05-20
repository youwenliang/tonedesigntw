import React, { Component } from 'react';
import Header from '../components/header.js';

class Section2 extends Component {
  render() {
    var sectionStyle = {
      background: "#f7f8fa",
      borderTop: "2px #dbe1e9 solid"
    }
    return (
      <section className="section-2" style={sectionStyle}>
        <div className="content ph4 mw8 center">
          <Header title="Section 2"/>
        </div>
      </section>
    );
  }
}

export default Section2;
