import React, { Component } from 'react';
import Header from '../components/header.js';

import logo1 from '../images/logos/1-1.svg';
import logo2 from '../images/logos/1-2.svg';
import logo3 from '../images/logos/1-3.svg';
import logo4 from '../images/logos/1-4.svg';
import logo5 from '../images/logos/2-1.svg';
import logo6 from '../images/logos/2-2.svg';
import logo7 from '../images/logos/2-3.svg';
import logo8 from '../images/logos/2-4.svg';
import logo9 from '../images/logos/3-1.svg';
import logo10 from '../images/logos/3-2.svg';
import logo11 from '../images/logos/3-3.svg';
import logo12 from '../images/logos/3-4.svg';

class Clients extends Component {
  render() {
  	var sectionStyle = {
  		background: "#4c5b7f"
  	}
  	var logoURL = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12];
  	var logoList = [];
  	for(var i = 0; i < logoURL.length; i++){
  		logoList.push(
  			<div className="fl w-50 w-third-m w-25-l pv2 ph0 tc" key={i}>
  				<img src={logoURL[i]} alt={logoURL[i].split('=')[1]}/>
  			</div>
  		)
  	}

    return (
      <section className="clients" style={sectionStyle}>
      	<div className="content ph4 mw8 w-100 center">
      	  <Header title="Our Client" color="#fff"/>
      	  <div className="cf ph2-ns">
		    {logoList}
		  </div>
      	</div>
      </section>
    );
  }
}

export default Clients;
