import React, { Component } from 'react';
// components
import LottieControl from '../components/lottie.js';
import Button from '../components/button.js';
// images
import shadow from '../images/cover-shadow.png';
import scroll from '../images/scroll.svg';
import bg_tone from '../images/cover-tone.svg';
import logo from '../images/tone-white.svg';

import $ from 'jquery';
import gData from '../data/data.js';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

// bg x 3
import bg1 from '../images/cover-bg.svg';
import bg2 from '../images/cover-bg.svg';
import bg3 from '../images/cover-bg.svg';

// animation x 3
import * as animation1 from '../images/animations/data1_loop.json';
import * as animation2 from '../images/animations/data1_loop.json';
import * as animation3 from '../images/animations/data1_loop.json';

// animation x 3
import * as animationW1 from '../images/animations/wave_data.json';
import * as animationW2 from '../images/animations/wave_data.json';
import * as animationW3 from '../images/animations/wave_data.json';

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
      if(this.state.mobile) {
        let vh = window.innerHeight * 0.01;
        $('.vh-100').css('height', 100 * vh+'px');
        $('.min-vh-100').css('min-height', 100 * vh+'px');
      }

      $('#animationWaves').next().css({'height':'100vh'})
    });
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][0]];
  	var coverStyle = {
  		width: "100%",
      minHeight: "700px"
  	}
    var shadowStyle = {
      position: "relative",
      top: "-30px",
      marginBottom: "-50px",
      zIndex: 1
    }
    var scrollStyle = {
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
      marginTop: this.state.mobile ? "0px" : "-100px",
    }
    var imgS = {
      transformOrigin: "100% 60%",
      transform: "translate(20px,30px)"
    }
    var bg = [bg1, bg2, bg3];
    var bgStyle = {
      top: 0,
      left: 0,
      backgroundColor: "#ffffff",
      backgroundImage: "url("+bg[data.id - 1]+")",
      backgroundSize: this.state.large ? "cover": "1800px",
      backgroundPosition: "center 0%",
      backgroundRepeat: "no-repeat"
    }
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


    var bgWStyle = {
      top: wTop,
      left: $(window).width() >= 1550 ? 0 : "calc((100vw - 1550px)/2)",
      width: $(window).width() >= 1550 ? "100vw" : "1550px",
      height: "90vh",
      transform: "translateY(-60px)"
    }
    var bg2Style = {
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

    var contents = this.state.mobile ? (
      <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l justify-center z1 relative">
        <div className="fl w-100 w-50-l tr-l tc relative mt4" style={img}>
          <LottieControl data1={animationDataCover} open={false} id="animationCover" offset={0}/>
          <img src={shadow} width="90%" style={shadowStyle} alt="shadow"/>
        </div>
        <div className="fl w-100 w-50-l tl-l tc mt4 mt0-l mw6-l mw9">
          {/*<h1 className="w-100 f1-ns f2 white fw3 mt0">{data.title}</h1>*/}
          <img src={logo} width="350px" alt="tone design" className="mb4"/>
          <p className="w-100 center lh-copy ls-medium f1375 white mb4 mt0 mw400 fw4">{data.content}</p>
          <Button content={data.button} shadow={true} scale={1} center={true}/>
        </div>
      </div>
    ) : (
      <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l justify-center z1 relative" style={mw}>
        <div className="fl w-100 w-40-l tl-l tc mt0 mw6-l mw9 mb5">
          {/*<h1 className="w-100 f1-ns f2 white fw3 mt0">{data.title}</h1>*/}
          <img src={logo} width="350px" alt="tone design" className="mb4"/>
          <p className="w-100 lh-copy ls-medium f1375 white mb4 mt0 mw400 fw4 tshadow">{data.content}</p>
          <Button content={data.button} shadow={true}/>
        </div>
        <div className="fl w-100 w-60-l tr-l tc relative" style={imgS}>
          <LottieControl data1={animationDataCover} open={false} id="animationCover" offset={0} render={true}/>
          <img src={shadow} width="90%" style={shadowStyle} alt="shadow"/>
        </div>
      </div>
    )

    return (
      <header id={gData["sections"][0]} className="cover flex justify-center items-center relative vh-100" style={coverStyle}>
        <Controller>
          <Scene
            indicators={false}
            duration="200%"
            triggerHook="onEnter"
          >
            <Timeline
              wrapper={<div className="content ph4 center w-100" />}
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
                <LottieControl data1={animationDataWaves} open={false} id="animationWaves" offset={0}/>
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
        <div style={scrollStyle} className="dn db-ns">
          <img src={scroll} width="40px" alt="arrow"/>
          <p className="ma2 i ls-none">Scroll</p>
        </div>
      </header>
    );
  }
}

export default Cover;



