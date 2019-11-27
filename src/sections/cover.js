import React, { Component } from 'react';
// components
import LottieControl from '../components/lottie.js';
import Button from '../components/button.js';
// images
import shadow from '../images/cover-shadow.png';
import scroll from '../images/scroll.svg';
import bg_tone from '../images/cover-tone.svg';

import $ from 'jquery';
import gData from '../data/data.js';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

// bg x 3
import bg_mobile1 from '../images/cover-waves-mobile.jpg';
import bg_mobile2 from '../images/cover-waves-mobile.svg';
import bg_mobile3 from '../images/cover-waves-mobile.svg';

// animation x 3
import * as animation1 from '../images/animations/open_data.json';
import * as animation2 from '../images/animations/data1_loop.json';
import * as animation3 from '../images/animations/data1_loop.json';

// animation x 3
import * as animationW1 from '../images/animations/wave_data_cover.json';
import * as animationW2 from '../images/animations/data_bigwave_pink.json';
import * as animationW3 from '../images/animations/data_bigwave_pink.json';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 959 ? true : false
    }
    this.checkMobile = this.checkMobile.bind(this);
  }
  componentDidMount() {
    var $t = this;
    window.addEventListener('resize', $t.checkMobile, false);
    $(document).ready(function(){
      if($t.state.mobile) {
        let vh = window.innerHeight * 0.01;
        $('.vh-100').css('height', 100 * vh+'px');
        $('.min-vh-100').css('min-height', 100 * vh+'px');
      }
      // $('#animationWaves').next().css({'height':'100vh'})
    });
  }
  componentWillUnmount(){
    var $t = this;
    window.removeEventListener('resize', $t.checkMobile, false);
  }
  checkMobile() {
    var $t = this;
    if($(window).width() <= 959) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][0]];
  	var coverStyle = {
  		width: "100%",
      minHeight: $(window).width() < 480 ? "640px" : "700px"
  	}
    var shadowStyle = {
      position: "relative",
      top: this.state.mobile ? "-30px" : "-50px",
      marginBottom: $(window).width() < 959 ? "-30px" : "-50px",
      zIndex: 1,
      maxWidth: $(window).width() < 480 ? "240px" : "535px"
    }
    var scrollStyle = {
      width: "100%",
      textAlign: "center",
      position: "absolute",
      bottom: this.state.mobile ? "20px":"50px",
      left: 0,
      right: 0,
      margin: "auto",
      color: "#757575",
      opacity: ".5"
    }
    var img = {
      maxWidth: this.state.mobile ? "420px" : "500px",
      marginTop: this.state.mobile ? "-40px" : "-100px",
      transformOrigin: "center bottom",
      transform: $(window).width() < 480 ? "scale(1.05)" : "scale(1)"
    }
    var imgS = {
      transformOrigin: "100% 60%",
      transform: "translate(37px,30px)"
    }
    var bg = [bg_mobile1, bg_mobile2, bg_mobile3];
    
    var wTop = 0;
    if($(window).width() >= 1550) {
      if($(window).height() > 953) wTop = "calc(715px - 46.15vw)";
      else if($(window).height() <= 953 && $(window).height() > 700) wTop = "calc((100vh - 953px)/2 + 715px - 46.15vw)";
      else wTop = "calc(-126.5px + 715px - 46.15vw)";
    } else {
      if($(window).height() > 953) wTop = 0;
      else if($(window).height() <= 953 && $(window).height() > 700) wTop = "calc((100vh - 953px)/2)";
      else wTop = "-126.5px";
    }
    var wmTop = 0;
    if($(window).height() > 700) wmTop = "calc(50vh - 75.3vw - 90.3px)";
    else wmTop = "calc(260px - 75.3vw)";

    var wmsTop = 0;
    if($(window).height() > 640) wmsTop = "calc(50vh + 21.95vw - 510px)";
    else wmsTop = "calc(65.3vw - 345px)";

    var bgWStyle = this.state.mobile ? {
      top: $(window).width() < 480 ? wmsTop : wmTop,
      left: $(window).width() < 480 ? "calc(50vw - 240px)":"0",
      width: $(window).width() < 480 ? "480px":"100%",
      height: "100%",
      backgroundImage: "url("+bg[data.id - 1]+")",
      backgroundSize: $(window).width() < 480 ? "480px":"contain",
      backgroundRepeat: "no-repeat"
    }:{
      top: wTop,
      left: $(window).width() >= 1550 ? 0 : "calc((100vw - 1550px)/2)",
      width: $(window).width() >= 1550 ? "100vw" : "1550px",
      height: "90vh",
      transform: "translateY(-60px)"
    }
    var bg2Style = this.state.mobile ? null : {
      top: 0,
      left: 0,
      backgroundImage: "url("+bg_tone+")",
      backgroundSize: "700px",
      backgroundPosition: "30% 30%",
      backgroundRepeat: "no-repeat"
    }
    
    var animations = [animation1, animation2, animation3];
    var animationWaves = [animationW1, animationW2, animationW3];
    var animationDataCover = animations[data.id - 1];
    var animationDataWaves = animationWaves[data.id - 1];

    var mw = {
      maxWidth: "1100px"
    }
    var mbh1 = $(window).width() < 480 ? "mb25" : "mb30";
    var mbp = $(window).width() < 480 ? "mb40" : "mb70";

    var adh1 = {
      transform: $(window).width() < 480 ? "translateX(15px)":"translateX(20px)"
    }
    var adp = {
      transform: $(window).width() < 480 ? "translateX(10px)":"translateX(12px)"
    }

    var contents = this.state.mobile ? (
      <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l justify-center z1 relative">
        <div id="speaker" className="fl w-100 w-50-l tr-l tc relative mt4" style={img}>
          <LottieControl data1={animationDataCover} open={false} id="animationCover" offset={0}/>
          <img src={shadow} width="90%" style={shadowStyle} alt="shadow"/>
        </div>
        <div className="fl w-100 w-50-l tc mt0 cover-text">
          <h1 style={adh1} className={"color-blue f25rem fw5 ls-medium nowrap mt0 "+mbh1} dangerouslySetInnerHTML={{__html:data.title}}></h1>
          <p style={adp} className={"w-100 lh-medium ls-medium f4-ns f18 color-blue mw400 center fw4 "+mbp} dangerouslySetInnerHTML={{__html:data.content}}></p>
          <Button content={data.button} shadow={true} link={gData["typeformURL"]} blank={true}/>
        </div>
      </div>
    ) : (
      <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l justify-center z1 relative" style={mw}>
        <div className="fl w-100 w-40-l tl-l tc mt0 mw6-l mw9 mb5 cover-text">
          <h1 className="white f25rem tshadow0 mb30 fw5 ls-medium nowrap" dangerouslySetInnerHTML={{__html:data.title}}></h1>
          <p className="w-100 lh-medium ls-medium f4 white mb70 mt4 mw400 fw4 tshadow2" dangerouslySetInnerHTML={{__html:data.content}}></p>
          <Button content={data.button} shadow={true} link={gData["typeformURL"]} blank={true}/>
        </div>
        <div className="fl w-100 w-60-l tr relative" style={imgS}>
          <LottieControl data1={animationDataCover} open={false} id="animationCover" offset={0} render={true}/>
          <img src={shadow} width="90%" style={shadowStyle} alt="shadow"/>
        </div>
      </div>
    )
      

    var waves = this.state.mobile ? null : (<LottieControl data1={animationDataWaves} open={false} id="animationWaves" offset={0}/>)

    return (
      <header id={gData["sections"][0]} className="cover flex justify-center items-center relative vh-100" style={coverStyle}>
        <Controller>
          <Scene
            indicators={false}
            duration="200%"
            triggerHook="onEnter"
          >
            <Timeline
              wrapper={<div className="content ph4-ns ph24 center w-100" />}
            >
              <Tween
                position="0"
                from={{
                  yPercent: -25,
                }}
                to={{
                    yPercent: 10,
                }}
              >
              {/*<div className="absolute w-100 h-100" style={bgStyle}/>*/}
              
              </Tween>
              <div className="absolute" style={bgWStyle}>
                {waves}
              </div>
              <Tween
                position="0"
                from={{
                  yPercent: -10,
                }}
                to={{
                    yPercent: 5,
                }}
              >
              <div className="absolute w-100 h-100" style={bg2Style}/>
              </Tween>
              {contents}
            </Timeline>
          </Scene>
        </Controller>
        <div style={scrollStyle}>
          <img src={scroll} width="40px" alt="arrow"/>
          <p className="ma2 i ls-none">Scroll</p>
        </div>
      </header>
    );
  }
}

export default Cover;



