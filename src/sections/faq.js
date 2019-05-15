import React, { Component } from 'react';
import Header from '../components/header.js';

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
  	var qContent = [
  		[
  		 "Q1:Lorem ipsum dolor sit amet, cons elit, sedt ut labore et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		],
  		[
  		 "Q2:Lorem ipsum onsectetur adipiscing elit, sedt ut labore et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		],
  		[
  		 "Q3:Lorem ipsum dot, consectetur adipiscing elit, sedt ut labore et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		],
  		[
  		 "Q4:Lorem ipsum dolor sit ipiscing elit, sedt ut labore et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		],
  		[
  		 "Q5:Lorem ipsum dolor sit amet, consectetur adipisc et dolore magna aliqua.",
  		 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  		]
  	]
  	var qList = [];
  	for(var i = 0; i < qContent.length; i++){
  		qList.push(
  		  <div>
	  	    <button className="collapsible f5 fw6">{qContent[i][0]}</button>
			<div className="answers">
			  <p className="o-60 lh-copy f5">{qContent[i][1]}</p>
			</div>
		  </div>
  		)
  	}

    return (
      <section className="faq" style={sectionStyle}>
      	<div className="content ph4 mw8 center">
      	  <Header title="Faq"/>
      	  <div className="mt5">
      	  	{qList}
      	  </div>
      	</div>
      </section>
    );
  }
}

export default Faq;
