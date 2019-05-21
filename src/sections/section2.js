import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';

class Section2 extends Component {
  render() {
    // import data
    var data = this.props.data[gData["sections"][2]];

    var sectionStyle = {
      background: "#f7f8fa",
      borderTop: "2px #dbe1e9 solid"
    }
    return (
      <section id={gData["sections"][2]} style={sectionStyle}>
        <div className="content ph4 mw8 center">
          <Header title={data.sectionTitle}/>
        </div>
      </section>
    );
  }
}

export default Section2;
