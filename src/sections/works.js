import React, { Component } from 'react';
import Header from '../components/header.js';
import Button from '../components/button.js';
import gData from '../data/data.js';
import portfolioVideoO from '../images/videos/portfolio_open.mp4';
import portfolioVideoL from '../images/videos/portfolio_loop.mp4';
import $ from 'jquery';

class Works extends Component {
  componentDidMount(){
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
      if($(window).scrollTop() >= $('#'+gData["sections"][6]).offset().top) {
        video.play();
      }
    });
  }
  render() {
    var sectionStyle = {
      background: "#ffffff",
      paddingBottom: 0
    }
    var contentStyle = {
      width: "80%",
      minWidth: "1024px",
      position: "relative",
      zIndex: 1,
      marginBottom: "-10px"
    }
    return (
      <section id={gData["sections"][6]} style={sectionStyle}>
        <div className="content ph4-ns ph2 mw9 center tc">
          <div className="flex justify-center">
            <div className="hide mb4" style={contentStyle}>
              <video id="home-video" className="home-video relative" width="100%" muted playsInline preload="auto" autoPlay>
                <source src={portfolioVideoO} type="video/mp4"/>
              </video>
              <video id="home-video-loop" className="home-video absolute" width="100%" muted playsInline preload="auto" loop>
                <source src={portfolioVideoL} type="video/mp4"/>
              </video>
            </div>
          </div>
          <div className="hide z2 relative">
            <h2 className="color-content f2 ls2 lh-copy fw4 ph2">看看我們的完整作品吧！</h2>
            <Button content={"看完整案例！"} scale={1.25}/>
          </div>
        </div>
      </section>
    );
  }
}

export default Works;
