import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';

class Faq extends Component {
  componentDidMount(){
  	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var content = this.nextElementSibling;
	    if (content.style.maxHeight){
	      content.style.maxHeight = null;
	    } else {
	      content.style.maxHeight = content.scrollHeight + "px";
	    } 
	  });
	}
  }
  render() {
    var sectionStyle = {
  		background: "#f7f8fa"
  	}

  	var textStyle = {
  		color: "#505f81"
  	}


  	var qContent = [
  		[
  		 "Lorem ipsum dolor sit amet, cons elit, sedt ut labore et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		],
  		[
  		 "Lorem ipsum onsectetur adipiscing elit, sedt ut labore et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		],
  		[
  		 "Lorem ipsum dot, consectetur adipiscing elit, sedt ut labore et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		],
  		[
  		 "Lorem ipsum dolor sit ipiscing elit, sedt ut labore et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		],
  		[
  		 "Lorem ipsum dolor sit amet, consectetur adipisc et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		]
  	]
  	var qList = [];
  	for(var i = 0; i < qContent.length; i++){
  		qList.push(
  		  <div className="relative" key={i}>
  		  	<div className="collapsibleCircle absolute z1 white flex justify-center items-center f3 fw6">{i+1}</div>
	  	    <button className="collapsible f4 lh-copy fw5" style={textStyle}>{qContent[i][0]}</button>
			<div className="answers">
			  <p className="o-60 lh-copy f4">{qContent[i][1]}</p>
			</div>
		  </div>
  		)
  	}

    return (
      <section id={gData["sections"][8]} style={sectionStyle}>
      	<div className="content ph4 mw8 center">
      	  <Header title="Q&A" color="#4c5b7f"/>
      	  <div>
      	  	{qList}
      	  </div>
      	</div>
      </section>
    );
  }
}

export default Faq;
