import React, { Component } from 'react';
import Header from '../components/header.js';

class Section4 extends Component {
  render() {
  	// import data
  	var data = this.props.data["section4"];
    var sectionStyle = {
      background: "#f7f8fa",
      borderTop: "2px #dbe1e9 solid"
    }
    return (
      <section className="section-4" style={sectionStyle}>
        <div className="content ph4 mw8 center">
          <Header title={data.sectionTitle}/>
        </div>
      </section>
    );
  }
}

export default Section4;
