import React, { Component } from 'react';
import LottieControl from '../components/lottie.js';
import shadow from '../images/cover-shadow.png';
import scroll from '../images/scroll.svg';
import bg from '../images/cover-bg.svg';
import bg2 from '../images/cover-tone.svg';
import bg3 from '../images/cover-waves.svg';
import $ from 'jquery';
import gData from '../data/data.js';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


import Button from '../components/button.js';
import * as animationDataCover from '../images/animations/data1_loop.json';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      large: false
    };
  }
  componentDidMount(){
    var $this = this;
    function checkMobile() {
      if($(window).width() <= 959) {
        $this.setState({mobile:true});
      }
      else $this.setState({mobile:false});
      if($(window).width() >= 1800) {
        $this.setState({large:true});
      }
      else $this.setState({large:false});
    }
    $(window).on('resize orientationchange', checkMobile);
    $(document).ready(function(){
      checkMobile();
    });
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][0]];
  	var coverStyle = {
  		width: "100%",
  		minHeight: "100vh",
  	}
    var shadowStyle = {
      position: "relative",
      top: "-30px",
      marginBottom: "-50px",
      zIndex: 1
    }
    var scrollStyle = {
      display: "block",
      width: "100%",
      textAlign: "center",
      position: "absolute",
      bottom: this.state.mobile ? "20px":"50px",
      left: 0,
      right: 0,
      margin: "auto",
      color: "#adbbcc",
      zIndex: 1
    }
    var img = {
      maxWidth: "500px",
      marginTop: "-100px"
    }
    var bgStyle = {
      top: 0,
      left: 0,
      backgroundColor: "#ffffff",
      backgroundImage: "url("+bg+")",
      backgroundSize: this.state.large ? "cover": "1800px",
      backgroundPosition: "center 0%",
      backgroundRepeat: "no-repeat"
    }
    var bg2Style = {
      top: 0,
      left: 0,
      backgroundImage: "url("+bg2+")",
      backgroundSize: "600px",
      backgroundPosition: "30% 35%",
      backgroundRepeat: "no-repeat"
    }
    var bg3Style = {
      top: 0,
      left: 0,
      backgroundImage: "url("+bg3+")",
      backgroundPosition: "left 5%",
      backgroundSize: this.state.mobile ? "960px" : "contain",
      backgroundRepeat: "no-repeat"
    }

    var contents = this.state.mobile ? (
      <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l justify-center z1 relative">
        <div className="fl w-100 w-50-l tr-l tc relative relative mt4" style={img}>
          <LottieControl data1={animationDataCover} open={false} id="animationCover" offset={0}/>
          <img src={shadow} width="90%" style={shadowStyle} alt="shadow"/>
        </div>
        <div className="fl w-100 w-50-l tl-l tc mt4 mt0-l mw6-l mw9">
          <h1 className="w-100 f1-ns f2 white fw3 mt0">{data.title}</h1>
          <p className="w-100 center lh-copy f1375 white mb4 mt0 mw400">{data.content}</p>
          <Button content={data.button}/>
        </div>
      </div>
    ) : (
      <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l justify-center z1 relative">
        <div className="fl w-100 w-50-l tl-l tc mt0 mw6-l mw9">
          <h1 className="w-100 f1-ns f2 white fw3 mt0">{data.title}</h1>
          <p className="w-100 lh-copy f1375 white mb4 mt0 mw400">{data.content}</p>
          <Button content={data.button}/>
        </div>
        <div className="fl w-100 w-50-l tr-l tc relative">
          <LottieControl data1={animationDataCover} open={false} id="animationCover" offset={0}/>
          <img src={shadow} width="90%" style={shadowStyle} alt="shadow"/>
        </div>
      </div>
    )

    return (
      <header id={gData["sections"][0]} className="cover flex justify-center items-center relative" style={coverStyle}>
        <Controller>
          <Scene
            indicators={false}
            duration="200%"
            triggerHook="onEnter"
          >
            <Timeline
              wrapper={<div className="content ph4 mw9-l center w-90-l w-100" />}
            >
              <Tween
                position="0"
                from={{
                  yPercent: -40,
                }}
                to={{
                    yPercent: 20,
                }}
              >
              <div className="absolute w-100 h-100" style={bgStyle}/>
              </Tween>
              <Tween
                position="0"
                from={{
                  yPercent: -25,
                }}
                to={{
                    yPercent: 10,
                }}
              >
              <div className="absolute w-100 h-100" style={bg2Style}/>
              </Tween>
              <div className="absolute w-100 h-100" style={bg3Style}/>
              {contents}
            </Timeline>
          </Scene>
        </Controller>
        <div style={scrollStyle}>
          <img src={scroll} width="40px" alt="arrow"/>
          <p className="ma2">Scroll</p>
        </div>
      </header>
    );
  }
}

export default Cover;


