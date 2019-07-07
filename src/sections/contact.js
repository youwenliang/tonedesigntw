import React, { Component } from 'react';
import Button from '../components/button.js';
import gData from '../data/data.js';
import $ from 'jquery';

import bg1 from '../images/cta-bg-new.svg';
import bg2 from '../images/cta-bg-new.svg';
import bg3 from '../images/cta-bg-new.svg';

import bgm1 from '../images/cta-bg-new-mobile.svg';
import bgm2 from '../images/cta-bg-new-mobile.svg';
import bgm3 from '../images/cta-bg-new-mobile.svg';

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
    var bgm = [bgm1, bgm2, bgm3];
    var data = this.props.data[gData["sections"][7]];
    var sectionStyle = {
  		backgroundImage: this.state.mobile ? "url("+bgm[data.id - 1]+")" : "url("+bg[data.id - 1]+")",
  		backgroundPosition: "center top",
  		backgroundSize: "cover", 
  		backgroundRepeat: "no-repeat",
  		minHeight: this.state.mobile ? "310px" : "530px",
      paddingBottom: 0
  	}
    var align = this.state.mobile ? {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "90px"
    }: null

    var mb = this.state.mobile ? "f18 mb30" : "f30 mb40";
    var flex = this.state.mobile ? "":"flex items-center";
    return (
      <section id={gData["sections"][7]} className={flex + " relative"} style={sectionStyle}>
      	<div className="hide content ph0 mw8 center tc" style={align}>
      	  <h2 className={"white ls2 lh-copy fw4 ph2 mv0 tshadow nowrap "+mb}>"有任何設計需求，歡迎聯繫我們！"</h2>
      	  <Button content={"填寫表單！"} shadow={true} scale={1} center={true}/>
      	</div>
      </section>
    );
  }
}

export default Contact;
