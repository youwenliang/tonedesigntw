import React, { Component } from 'react';
import Button from '../components/button.js';
import gData from '../data/data.js';
import $ from 'jquery';

import bg1 from '../images/cta-background.svg';
import bg2 from '../images/cta-background.svg';
import bg3 from '../images/cta-background.svg';

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
      if($(window).width() <= 479) {
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
  		backgroundImage: "url("+tone+"), url("+bg[data.id - 1]+")",
  		backgroundPosition: "85% 50%, center top",
  		backgroundSize: this.state.mobile ? "90vw, cover":"700px, cover", 
  		backgroundRepeat: "no-repeat, no-repeat",
  		minHeight: this.state.mobile ? "310px" : "530px",
      paddingBottom: 0
  	}

    var mb = this.state.mobile ? "mb30" : "mb40";
    return (
      <section id={gData["sections"][7]} className="flex items-center" style={sectionStyle}>
      	<div className="hide content ph4-ns ph2 mw8 center tc">
      	  <h2 className={"white f30 ls2 lh-copy fw4 ph2 mv0 tshadow "+mb}>"有任何設計需求，<br className="dn-ns db"/>歡迎聯繫我們！"</h2>
      	  <Button content={"填寫表單！"} shadow={true} scale={1} center={true}/>
      	</div>
      </section>
    );
  }
}

export default Contact;
