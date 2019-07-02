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
import * as animationDataCircleso from '../images/animations/data_service_open.json';
import * as animationDataCirclesl from '../images/animations/data_service_loop.json';

class Section3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 959 ? true : false
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
      backgroundSize: "520px",
      backgroundPosition: this.state.mobile ? "50% 70%" : "75% 22%",
      backgroundRepeat: "no-repeat"
    }
    var moreArrow = {
      position: "relative",
      top: "3px",
      marginLeft: "3px",
    }

    var scaleA = {
      transform: "scale(1.1)",
      maxWidth: "510px"
    }

    var mb = this.state.mobile ? "mb25" : "mb40"
    var circles = [circle1, circle2, circle3];
    return (
      <section id={gData["sections"][3]} style={sectionStyle} className="relative">
        <div className="absolute w-100 h-100 db-l dn" style={bg2Style}/>
        <div className="content ph4-ns ph2 mw70rem center z1 relative">
          <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l">
            <div className="fl w-100 w-50-l tc relative z-1 pr3-l pr0">
              <div className="w-90-ns w-100 fr-l center" style={scaleA}>
                <LottieControl data1={animationDataCircleso} data2={animationDataCirclesl} open={true} id="animationCircle" offset={35}/>
              </div>
            </div>
            <div className="hide fl w-100 w-50-l ph4-ns ph3 tl-l mw6 mt0">
              <h1 className={"f35 color-content fw4 mv0 "+mb}>{data.title}</h1>
              <h3 className="f25 lh-medium color-content fw4 mv0 mb25">{data.smalltitle}</h3>
              <p className="lh-medium f5 fw3 color-content2 mb25 tl mw400">{data.content}</p>
              <a href="#" className="more"><p className="fw4 mv0">
                Learn more <span className="fw7 f125" style={moreArrow}>></span>
              </p></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section3;
