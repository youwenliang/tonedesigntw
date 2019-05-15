import React, { Component } from 'react';
import Header from '../components/header.js';

class Works extends Component {
  render() {
    var sectionStyle = {
  		background: "#ffffff"
  	}
    return (
      <section className="works" style={sectionStyle}>
      	<div className="content ph4 mw8 center">
      	  <Header title="Works"/>
      	</div>
      </section>
    );
  }
}

export default Works;
