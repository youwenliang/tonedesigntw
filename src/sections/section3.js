import React, { Component } from 'react';
import Header from '../components/header.js';
import Button from '../components/button.js';
import LottieControl from '../components/lottie.js'
import gData from '../data/data.js';
import $ from 'jquery';

import circle1 from '../images/circle.png';
import circle2 from '../images/circle.png';
import circle3 from '../images/circle.png';
import bg_tone from '../images/fade-tone.svg';
import waves from '../images/waves.png';
import * as animationDataCircles from '../images/animations/circle_data.json';

class Section3 extends Component {
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
  	// import data
  	var data = this.props.data[gData["sections"][3]];
    var sectionStyle = {
      background: "#ffffff",
    }
    var mask = {
      top: 0,
      left: 0,
      right: 0,
      zIndex: 0
    }
    var bg2Style = {
      top: 0,
      left: 0,
      backgroundImage: "url("+bg_tone+")",
      backgroundSize: "700px",
      backgroundPosition: this.state.mobile ? "50% 70%" : "75% 26%",
      backgroundRepeat: "no-repeat"
    }
    var circles = [circle1, circle2, circle3];
    return (
      <section id={gData["sections"][3]} style={sectionStyle} className="relative">
        <div className="absolute w-100 h-100" style={bg2Style}/>
        <div className="content ph4-ns ph2 mw9 center z1 relative">
          <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l">
            <div className="hide fl w-100 w-50-l tc relative">
              <img className="z1 relative w-80 center" src={circles[data.id - 1]} alt="test"/>
              <div className="absolute w-80 center" style={mask}>
              	<img src={waves} alt="test"/>
                {/*<LottieControl data1={animationDataCircles} open={false} id="animationCircles" offset={0}/>*/}
              </div>
            </div>
            <div className="hide fl w-100 w-50-l ph4 tl-l tc mw6 mt0">
              <h1 className="f1 color-content fw4">{data.title}</h1>
              <h3 className="f175 lh-copy color-content fw4">{data.smalltitle}</h3>
              <p className="lh-medium f5-ns f6 fw3 color-content2 mb4 tl">{data.content}</p>
              <Button content={data.button}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section3;
