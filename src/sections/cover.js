import React, { Component } from 'react';
import LottieControl from '../components/lottie.js';
import shadow from '../images/shadow2.png';
import scroll from '../images/scroll.svg';
import bg from '../images/bg.svg';
import $ from 'jquery';
import gData from '../data/data.js'

import Button from '../components/button.js';
import * as animationDataCover from '../images/animations/data1_loop.json';

class Cover extends Component {
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
      console.log($this.state.mobile);
    }
    $(window).on('resize orientationchange', checkMobile);
    $(document).ready(function(){
      checkMobile();
    });
  }
  render() {
    // import data
    var data = this.props.data["cover"];
  	var coverStyle = {
  		width: "100%",
  		minHeight: "100vh",
  		background: "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
      //paddingTop: "74px"
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
      bottom: "50px",
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
      position: "absolute",
      width: "100vw",
      height: "30vh",
      zIndex: 0,
      bottom: 0
    }
    var contents = this.state.mobile ? (
      <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l justify-center z1 relative">
        <div className="fl w-100 w-50-l tr-l tc relative relative" style={img}>
          <LottieControl data1={animationDataCover} open={false} id="animationCover"/>
          <img src={shadow} width="90%" style={shadowStyle} alt="shadow"/>
        </div>
        <div className="fl w-100 w-50-l tl-l tc mt4 mt0-l mw6-l mw9">
          <h1 className="f1 white fw6 mt0">{data.title}</h1>
          <p className="lh-copy f3 white mb4 mt0">{data.content}</p>
          <Button content="Contact!"/>
        </div>
      </div>
    ) : (
      <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l justify-center z1 relative">
        <div className="fl w-100 w-50-l tl-l tc mt0 mw6-l mw9">
          <h1 className="f1 white fw6 mt0">{data.title}</h1>
          <p className="lh-copy f3 white mb4 mt0">{data.content}</p>
          <Button content="Contact!"/>
        </div>
        <div className="fl w-100 w-50-l tr-l tc relative">
          <LottieControl data1={animationDataCover} open={false} id="animationCover"/>
          <img src={shadow} width="90%" style={shadowStyle} alt="shadow"/>
        </div>
      </div>
    )

    return (
      <header id={gData["sections"][0]} className="cover flex justify-center items-center relative" style={coverStyle}>
        <div className="content ph4 mw9-l center w-90-l w-100">
          {contents}
        </div>
        <div style={scrollStyle}>
          <img src={scroll} width="40px" alt="arrow"/>
          <p className="ma2">Scroll</p>
        </div>
        <img src={bg} style={bgStyle} alt="background"/>
      </header>
    );
  }
}

export default Cover;
