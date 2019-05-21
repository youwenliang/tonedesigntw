import React, { Component } from 'react';
import Header from '../components/header.js';
import Button from '../components/button.js';

class Works extends Component {
  render() {
    var sectionStyle = {
  		background: "#ffffff"
  	}
  	var contentStyle = {
  		minWidth: "1540px"
  	}
    return (
      <section className="works" style={sectionStyle}>
      	<div className="content ph4 mw9 center tc">
      	  <Header title="Our Portfolio" color="#4c5b7f"/>
      	  <div className="flex justify-center">
      	  	<div style={contentStyle}>
      	  		<img className="mb4" width="100%" src="https://fakeimg.pl/1920x720/?text=Portfolio Video"/>
      	  	</div>
      	  </div>
      	  <Button content="Contact!"/>
      	  <h2 className="mt4 f3 i fw3 normal color-content">Clinging to a one-point</h2>
      	</div>
      </section>
    );
  }
}

export default Works;
