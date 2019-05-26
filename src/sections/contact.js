import React, { Component } from 'react';
import Button from '../components/button.js';
import gData from '../data/data.js';
import $ from 'jquery';

import bg1 from '../images/cta-background.svg';
import bg2 from '../images/cta-background.svg';
import bg3 from '../images/cta-background.svg';

import waves from '../images/cta-waves.svg';
import tone from '../images/cta-tone.svg';

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
    }
    $(window).on('resize orientationchange', checkMobile);
    $(document).ready(function(){
      checkMobile();
    });
  }
  render() {
    var bg = [bg1, bg2, bg3];
    var data = this.props.data[gData["sections"][7]];
    var sectionStyle = {
  		backgroundImage: "url("+waves+"), url("+tone+"), url("+bg[data.id - 1]+")",
  		backgroundPosition: "right 95%, 85% 50%, center top",
  		backgroundSize: this.state.mobile ? "960px, 700px, cover" : "contain, 700px, cover", 
  		backgroundRepeat: "no-repeat, no-repeat, no-repeat",
  		minHeight: "600px"
  	}
    return (
      <section id={gData["sections"][7]} className="flex items-center" style={sectionStyle}>
      	<div className="content ph4-ns ph2 mw8 center tc">
      	  <h2 className="white f2 ls2 lh-copy fw3 ph2">這是一段關於聯絡我們的文字</h2>
      	  <Button content={"按鈕文字"} scale={this.state.mobile ? "1.5" : "1.5"}/>
      	</div>
      </section>
    );
  }
}

export default Contact;
