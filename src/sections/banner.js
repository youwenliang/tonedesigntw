import React, { Component } from 'react';
import Button from '../components/button.js';
import gData from '../data/data.js';
import $ from 'jquery';
import wave from '../images/wave-small@2x.png';

class Banner extends Component {
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
    var sectionStyle = {
      background: "#ffffff",
    }
    var mb = this.state.mobile ? "mb30" : "mb40";
    var mb1 = this.state.mobile ? "mb25" : "mb30";
    return (
      <section id="banner" className="sectionL" style={sectionStyle}>
        <div className="borderline top"/>
        <div className="mw8 tc center ph3">
          <img src={wave} width="80px" alt="wave" className={mb1}/>
        	<h2 className={"hide f30 fw5 color-content ls-large mv0 "+mb}>用內容，強化你的品牌價值</h2>
          <p className="ph5 ph2-l center hide f125 fw3 color-content tc mt3 mb4-l mb0 lh-large ls-medium">
            Tone Design 運用資訊設計、視覺設計，結合 User Experience 設計，<br className="db-l dn"/>
            為不同階段的消費者旅程，設計出打動人心的內容，
          </p>
        </div>
        <div className="borderline bottom"/>
      </section>
    );
  }
}

export default Banner;
