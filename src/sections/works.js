import React, { Component } from 'react';
import Button from '../components/button.js';
import gData from '../data/data.js';
import portfolioVideoO from '../images/videos/portfolio_open.mp4';
import portfolioVideoL from '../images/videos/portfolio_loop.mp4';
import portfolioVideoMO from '../images/videos/portfolioM_open.mp4';
import portfolioVideoML from '../images/videos/portfolioM_loop.mp4';
import $ from 'jquery';

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 768 ? true : false
    }
    this.checkMobile = this.checkMobile.bind(this);
  }
  componentDidMount() {
    var $t = this;
    window.addEventListener('resize', $t.checkMobile, false);
    var video = document.getElementById('home-video');
    var video_loop = document.getElementById('home-video-loop');
    video.load();
    video.pause();

    document.getElementById('home-video').addEventListener('ended', myHandler, false);
    function myHandler(e) {
      //console.log('done');
      $('#home-video-loop').css({'z-index': 1, 'opacity': 1});
      video_loop.play();
    }

    video.addEventListener('canplaythrough', function() {
      //console.log('video loaded');
    }, false);

    $(window).scroll( function(){
      if($(window).scrollTop() >= $('#'+gData["sections"][6]).offset().top - $(window).height()*2/3) {
        video.play();
      }
    });
  }
  componentWillUnmount(){
    var $t = this;
    window.removeEventListener('resize', $t.checkMobile, false);
  }
  checkMobile() {
    var $t = this;
    if($(window).width() <= 768) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
    var sectionStyle = {
      background: "#ffffff",
      paddingBottom: 0
    }
    var contentStyle = {
      width: this.state.mobile ? "100%":"80%",
      minWidth: this.state.mobile ? "auto":"1000px",
      maxWidth: this.state.mobile ? "auto":"1000px",
      position: "relative",
      zIndex: 1,
      marginBottom: "-25px",
      marginTop: "-15px"
    }
    var mb = this.state.mobile ? "mb30" : "mb50";
    var sourceO = this.state.mobile ? portfolioVideoMO : portfolioVideoO;
    var sourceL = this.state.mobile ? portfolioVideoML : portfolioVideoL;
    return (
      <section id={gData["sections"][6]} style={sectionStyle}>
        <div className="content ph4-ns ph2 mw9 center tc">
          <div className="flex justify-center">
            <a href={gData["worksformURL"]}>
              <div className="hide mb4" style={contentStyle}>
                <video id="home-video" className="home-video relative" width="100%" muted playsInline preload="auto" autoPlay>
                  <source src={sourceO} type="video/mp4"/>
                </video>
                <video id="home-video-loop" className="home-video absolute" width="100%" muted playsInline preload="auto" loop>
                  <source src={sourceL} type="video/mp4"/>
                </video>
              </div>
            </a>
          </div>
          <div className="hide z2 relative mb60 tc">
            <p className="color-fade f18 ls2 lh-copy fw4 ph2 mb3">想了解 TONE 更多嗎？</p>
            <h2 className={"color-content f30 ls2 lh-copy fw4 ph2 "+mb}>看看我們的精彩作品吧！</h2>
            <Button content={"TONE 作品集"} scale={1} ghost={true} center={true} link={"http://works.tonedesign.com.tw/"}/>
          </div>
        </div>
      </section>
    );
  }
}

export default Works;
