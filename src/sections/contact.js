import React, { Component } from 'react';
import Button from '../components/button.js';
import gData from '../data/data.js';
import $ from 'jquery';

import background from '../images/cta-background.svg';
import waves from '../images/cta-waves.svg';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    };
  }
  componentDidMount(){
    var $this = this;
    function checkMobile() {
      if($(window).width() <= 959) {
      	$this.setState({mobile:true});
      }
      else $this.setState({mobile:false});
      console.log($this.state.mobile);
    }
    $(window).on('resize orientationchange', checkMobile);
    $(document).ready(function(){
      checkMobile();
    });
  }
  render() {
    var sectionStyle = {
  		backgroundImage: "url("+waves+"), url("+background+")",
  		backgroundPosition: "right 95%, center top",
  		backgroundSize: this.state.mobile ? "960px, cover" : "contain, cover",
  		backgroundRepeat: "no-repeat, no-repeat",
  		minHeight: "600px"
  	}
    return (
      <section id={gData["sections"][7]} className="flex items-center" style={sectionStyle}>
      	<div className="content ph4-ns ph2 mw8 center tc">
      	  <h2 className="white f25 fw3">這是一段關於聯絡我們的文字</h2>
      	  <Button content={"按鈕文字"} scale="1.5"/>
      	</div>
      </section>
    );
  }
}

export default Contact;
