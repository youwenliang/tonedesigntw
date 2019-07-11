import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';
import LottieControl from '../components/lottie.js';
import $ from 'jquery';

import arrowup from '../images/arrow-up.svg';
import arrowdown from '../images/arrow-down.svg';

import tone1 from '../images/icons/tone-1.png';
import tone2 from '../images/icons/tone-2.png';
import tone3 from '../images/icons/tone-3.png';

import icon1a_1  from '../images/icons/a-1.svg';
import icon1a_2  from '../images/icons/a-2.svg';
import icon1a_3  from '../images/icons/a-3.svg';
import icon1b_1  from '../images/icons/b-1.svg';
import icon1b_2  from '../images/icons/b-2.svg';
import icon1b_3  from '../images/icons/b-3.svg';
import icon1c_1  from '../images/icons/c-1.svg';
import icon1c_2  from '../images/icons/c-2.svg';
import icon1c_3  from '../images/icons/c-3.svg';

import icon2a_1  from '../images/icons/a-1.svg';
import icon2a_2  from '../images/icons/a-2.svg';
import icon2a_3  from '../images/icons/a-3.svg';
import icon2b_1  from '../images/icons/b-1.svg';
import icon2b_2  from '../images/icons/b-2.svg';
import icon2b_3  from '../images/icons/b-3.svg';
import icon2c_1  from '../images/icons/c-1.svg';
import icon2c_2  from '../images/icons/c-2.svg';
import icon2c_3  from '../images/icons/c-3.svg';

import icon3a_1  from '../images/icons/a-1.svg';
import icon3a_2  from '../images/icons/a-2.svg';
import icon3a_3  from '../images/icons/a-3.svg';
import icon3b_1  from '../images/icons/b-1.svg';
import icon3b_2  from '../images/icons/b-2.svg';
import icon3b_3  from '../images/icons/b-3.svg';
import icon3c_1  from '../images/icons/c-1.svg';
import icon3c_2  from '../images/icons/c-2.svg';
import icon3c_3  from '../images/icons/c-3.svg';

// animation x 3
import * as animation1a from '../images/animations/dataA.json';
import * as animation1b from '../images/animations/dataB.json';
import * as animation1c from '../images/animations/dataC.json';
import * as animation2a from '../images/animations/dataA.json';
import * as animation2b from '../images/animations/dataB.json';
import * as animation2c from '../images/animations/dataC.json';
import * as animation3a from '../images/animations/dataA.json';
import * as animation3b from '../images/animations/dataB.json';
import * as animation3c from '../images/animations/dataC.json';


var icons = [
  [
    [icon1a_1, icon1a_2, icon1a_3],[icon1b_1, icon1b_2, icon1b_3],[icon1c_1, icon1c_2, icon1c_3]
  ],
  [
    [icon2a_1, icon2a_2, icon2a_3],[icon2b_1, icon2b_2, icon2b_3],[icon2c_1, icon2c_2, icon2c_3]
  ],
  [
    [icon3a_1, icon3a_2, icon3a_3],[icon3b_1, icon3b_2, icon3b_3],[icon3c_1, icon3c_2, icon3c_3]
  ],
]

var animations = [
  [animation1a, animation1b, animation1c],
  [animation2a, animation2b, animation2c],
  [animation3a, animation3b, animation3c],
]

class Section2m extends Component {
  componentDidMount(){
    var coll = document.getElementsByClassName("opening");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
    var clo = document.getElementsByClassName("closing");
    var j;
    for (j = 0; j < clo.length; j++) {
      clo[j].addEventListener("click", function() {
        var num = this.id.split('ing')[1];
        console.log(num);
        var temp = document.getElementById("opening"+num);
        temp.classList.remove('active');
        var content = temp.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    };
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][2]];

    var sectionStyle = {
      background: "#f7f8fa",
    }
    var mb = "mb70"
    var dn = this.props.display ? "":"dn";
    var upStyle = {
      position: "absolute",
      bottom: "0",
      height: "60px",
      left: 0,
      right: 0,
      margin: "auto"
    }
    var downStyle = {
      position: "absolute",
      bottom: "-35px",
      left: 0,
      right: 0,
      margin: "auto"
    }
    var content = function(i) {
      var toneIcons = [tone1, tone2, tone3];
      var mb50 = i===2 ? "" : "mb50";
      var down = i===2 ? "" : (<img className="hide" src={arrowdown} width={32} style={downStyle} alt="arrow"/>);
      return (
        <div className={mb50 + " relative"}>
          <button id={"opening"+i} className="hide w-100 opening lh-copy fw4 flex items-center justify-center cp">
            <img className="mr3" src={toneIcons[i]} width="48" height="48" alt="icons"/>
            <p className="tl fw5 z10 relative mv0">{data.section[i]}</p>
          </button>
          <div className="answers relative">
            <div className="mw400 center">
              <h2 className="f18 fw4 mt30 lh-medium color-content">{data.content[i]["tagline"]}</h2>
              <LottieControl data1={animations[data.id-1][i]} open={false} id={"animationMobileContent"+i} offset={0}/>
              <div className="color-content mt30">
                <h3 className="f5 fw5 mb20 ls-small lh-medium" dangerouslySetInnerHTML={{__html:data.content[i]["title"]}}></h3>
                <p className="f5 fw3 lh-medium mt0 mb30">{data.content[i]["paragraph"]}</p>
              </div>
              <p className="f12 color-fade fw3 mt4 mb3">{data.content[i]["smalltitle"][1]}</p>
              <div className="cf fw4 f5 tc color-content mt0 mb70">
                <div className="fl w-third">
                  <img src={icons[data.id-1][i][0]} width="72px" alt={data.content[i]["smallitem"][0]}/>
                  <p className="f13 mv0">{data.content[i]["smallitem"][0]}</p>
                </div>
                <div className="fl w-third">
                  <img src={icons[data.id-1][i][1]} width="72px" alt={data.content[i]["smallitem"][1]}/>
                  <p className="f13 mv0">{data.content[i]["smallitem"][1]}</p>
                </div>
                <div className="fl w-third">
                  <img src={icons[data.id-1][i][2]} width="72px" alt={data.content[i]["smallitem"][2]}/>
                  <p className="f13 mv0">{data.content[i]["smallitem"][2]}</p>
                </div>
              </div>
            </div>
            <div id={"closing"+i} className="ma0 w-100 cp flex items-center justify-center closing" style={upStyle}>
              <img src={arrowup} width={28} alt="arrow"/>
            </div>
          </div>
          {down}
        </div>
      )
    }
    var mw = $(window).width() >= 480 ? "mw480" : "mw300";
    return (
      <section style={sectionStyle} className={"relative "+dn}>
        <div className="content ph4-ns ph2 mw54rem w-100 center z2 relative">
          <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
          <p className={"mw480 center tagline hide f4 fw3 color-fade tc mt4-ns mt3 lh-medium ls-medium ph3 ph2-l "+mb} dangerouslySetInnerHTML={{__html:data.tagline}}></p>
          <div className={"opening2 center "+mw}>
            {content(0)}
            {content(1)}
            {content(2)}
          </div>
        </div>
      </section>
    );
  }
}

export default Section2m;
