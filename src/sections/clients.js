import React, { Component } from 'react';
import Header from '../components/header.js';

class Clients extends Component {
  render() {
  	var sectionStyle = {
  		background: "#f7f8fa"
  	}
  	var logoURL = [
  		"https://fakeimg.pl/250x100/?text=logo1",
  		"https://fakeimg.pl/250x100/?text=logo2",
  		"https://fakeimg.pl/250x100/?text=logo3",
  		"https://fakeimg.pl/250x100/?text=logo4",
  		"https://fakeimg.pl/250x100/?text=logo5",
  		"https://fakeimg.pl/250x100/?text=logo6",
  		"https://fakeimg.pl/250x100/?text=logo7",
  		"https://fakeimg.pl/250x100/?text=logo8",
  		"https://fakeimg.pl/250x100/?text=logo9",
  		"https://fakeimg.pl/250x100/?text=logo10",
  		"https://fakeimg.pl/250x100/?text=logo11",
  		"https://fakeimg.pl/250x100/?text=logo12",
  	]
  	var logoList = [];
  	for(var i = 0; i < logoURL.length; i++){
  		logoList.push(
  			<div className="fl w-50 w-third-m w-25-l pa2 tc" key={i}>
  				<img src={logoURL[i]} alt={logoURL[i].split('=')[1]}/>
  			</div>
  		)
  	}

    return (
      <section className="clients" style={sectionStyle}>
      	<div className="content ph4 mw8 w-100 center">
      	  <Header title="Clients"/>
      	  <div className="cf ph2-ns mt5">
		    {logoList}
		  </div>
      	</div>
      </section>
    );
  }
}

export default Clients;
