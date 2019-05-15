import React, { Component } from 'react';
import Header from '../components/header.js';

class Faq extends Component {
  render() {
    var sectionStyle = {
  		background: "#f7f8fa"
  	}
    return (
      <section className="faq" style={sectionStyle}>
      	<div className="content ph4 mw8 center">
      	  <Header title="Faq"/>
      	</div>
      </section>
    );
  }
}

export default Faq;
