import React, { Component } from 'react';
import Header from '../components/header.js';
import Button from '../components/button.js';
import gData from '../data/data.js';
import $ from 'jquery';
import wave from '../images/wave-small@2x.png';
import LottieControl from '../components/lottie.js';
import * as animationWaves from '../images/animations/small_wave_data.json'

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 479 ? true : false
    }
    this.checkMobile = this.checkMobile.bind(this);
  }
  componentDidMount() {
    var $t = this;
    window.addEventListener('resize', $t.checkMobile, false);
  }
  componentWillUnmount(){
    var $t = this;
    window.removeEventListener('resize', $t.checkMobile, false);
  }
  checkMobile() {
    var $t = this;
    if($(window).width() <= 479) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
    var sectionStyle = {
      background: "#ffffff",
    }
    var mb = this.state.mobile ? "mb30" : "mb40";
    var mb1 = this.state.mobile ? "mb25" : "mb30";
    var animation = {
      width: "140px"
    }
    return (
      <section id="banner" className="sectionL" style={sectionStyle}>
        <div className="borderline top"/>
        <div className="mw8 tc center ph3">
          <div className={mb1 + " center hide"} style={animation}>
            <LottieControl data1={animationWaves} open={false} id="animationWaves" offset={0}/>
          </div>
          <Header title={"用內容，強化你的品牌"} color="#4C5B7F" margin={false}/>
          <p className="ph3 ph2-l center hide f125 fw3 color-content tc mt4-ns mt3 mb4-l mb0 lh-large ls-medium">
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
