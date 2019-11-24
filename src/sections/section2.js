import React, { Component } from 'react';
import Header from '../components/header.js';
import { Controller, Scene } from 'react-scrollmagic';
import $ from 'jquery';
import gData from '../data/data.js';
import LottieControl from '../components/lottie.js';

import tone1 from '../images/icons/1.png';
import tone2 from '../images/icons/2.png';
import tone3 from '../images/icons/3.png';

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
import * as animation1a from '../images/animations/data4_loop.json';
import * as animation1b from '../images/animations/data5_loop.json';
import * as animation1c from '../images/animations/data6_loop.json';
import * as animation2a from '../images/animations/dataA.json';
import * as animation2b from '../images/animations/dataB.json';
import * as animation2c from '../images/animations/dataC.json';
import * as animation3a from '../images/animations/dataA.json';
import * as animation3b from '../images/animations/dataB.json';
import * as animation3c from '../images/animations/dataC.json';


{/*
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
*/}

var animations = [
  [animation1a, animation1b, animation1c],
  [animation2a, animation2b, animation2c],
  [animation3a, animation3b, animation3c],
]

var trigger = ["","",""];
var triggerCurrent = 0;

class Section2 extends Component {
  render() {
    // import data
    var data = this.props.data[gData["sections"][2]];

    var sectionStyle = {
      background: "#f7f8fa",
    }
    var innerShadow = {
      top: "-168px",
      position: "relative",
      boxShadow: "inset 0 0 10px rgba(86,86,86,.42)",
      width: "100vw",
      height: "420px",
      overflow: "hidden"
    }
    /*
    var number = {
      position: "relative",
      top: "-1.3px",
      left: "1.5px",
      textAlign: "center"
    };
    var color = {
      background: bgColor[data.id - 1]
    }
    var bgColor = [
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
    ]
    */

    var listContent = [];
    var subContent = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      margin: "0 auto"
    }
    var moreArrow = {
      position: "relative",
      top: "3px",
      marginLeft: "3px",
    }
    for(var i = 0; i < 3; i++) {
      var temp = (
        <div id={"content"+(i+1)} className="sub-content cf pv5 ph4-ns ph2 mw54rem center" key={i} style={subContent}>
          <div className="fl w-100 w-50-l relative color-content pr4 expand-icons">
            <LottieControl data1={animations[data.id-1][i]} open={false} id={"animationContent"+i} offset={0}/>
          </div>
          <div className="fl w-100 w-50-l relative pl4">
            {/*<p className="f6 color-fade fw4 mt3 mb4">{data.content[i]["smalltitle"][0]}</p>
            <ul className="circle-list fw3 color-content ls-medium">
              <li>
                <div className="collapsibleCircle absolute z1 white flex justify-center items-center f4 fw6" style={color}><p style={number}>1</p></div>
                {data.content[i]["smalllist"][0]}
              </li>
              <li>
                <div className="collapsibleCircle absolute z1 white flex justify-center items-center f4 fw6" style={color}><p style={number}>2</p></div>
                {data.content[i]["smalllist"][1]}
              </li>
              <li>
                <div className="collapsibleCircle absolute z1 white flex justify-center items-center f4 fw6" style={color}><p style={number}>3</p></div>
                {data.content[i]["smalllist"][2]}
              </li>
            </ul>*/}
            <div className="color-content">
              {/*<h3 className="f4 fw4 mb25 ls-small lh-medium" dangerouslySetInnerHTML={{__html:data.content[i]["title"]}}></h3>*/}
              <h2 className="f25 fw4 mt4 lh-medium">{data.content[i]["tagline"]}</h2>
              <p className="f5 fw3 lh-medium mv0">{data.content[i]["paragraph"]}</p>
              <a href={data.content[i]["url"]} target="_blank" rel="noopener noreferrer" className="more"><p className="fw4 mv3">
              了解更多 <span className="fw7 f125" style={moreArrow}>></span>
            </p></a>
            </div>
            {/*
            <p className="f15 color-fade fw3 mt4 mb3">{data.content[i]["smalltitle"][1]}</p>
            <div className="cf fw4 f5 tc color-content">
              <div className="fl w-third">
                <img src={icons[data.id-1][i][0]} width="72px" alt={data.content[i]["smallitem"][0]}/>
                <p className="f5 mv0">{data.content[i]["smallitem"][0]}</p>
              </div>
              <div className="fl w-third">
                <img src={icons[data.id-1][i][1]} width="72px" alt={data.content[i]["smallitem"][1]}/>
                <p className="f5 mv0">{data.content[i]["smallitem"][1]}</p>
              </div>
              <div className="fl w-third">
                <img src={icons[data.id-1][i][2]} width="72px" alt={data.content[i]["smallitem"][2]}/>
                <p className="f5 mv0">{data.content[i]["smallitem"][2]}</p>
              </div>
            </div>
            */}
          </div>
        </div>
      );
      listContent.push(temp);
    }

    var off = $(window).height()/2 - 66 + "px";
    var dn = this.props.display ? "":"dn";
    return (
      <div className={dn}>
        <Controller>
          <Scene pin duration={3600} classToggle="start" triggerElement={"#"+gData["sections"][2]} indicators={false} offset={off}>
            {(progress, event) => {
              if(progress < 0.33 && progress > 0) {
                trigger = ["active","",""]
                triggerCurrent = 1;
              }
              else if(progress >= 0.33 && progress < 0.67) {
                trigger = ["","active",""]
                triggerCurrent = 2;
                $('.scrollmagic-pin-spacer').css({
                  "margin-bottom": "500px"
                })
              }
              else if(progress >= 0.67 && progress < 1) {
                trigger = ["","","active"]
                triggerCurrent = 3;
                $('.scrollmagic-pin-spacer').css({
                  "margin-bottom": "500px"
                })
              }
              if(event.type === "leave") {
                trigger = ["","",""]
                $('.scrollmagic-pin-spacer').css({
                  "min-height": "inherit",
                  "padding-bottom": 0,
                  "margin-bottom": 0
                })
              }

              var font = {
                fontFamily: "'Montserrat', sans-serif",
              }

              return (
              <section id={gData["sections"][2]} style={sectionStyle} className="relative sectionS">
                <div id="arrowTrigger" className="content">
                  <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
                  <div className="hide">
                    <p className="tagline f4 fw3 color-content tc mt4 mb70 lh-medium ls-medium ph2" dangerouslySetInnerHTML={{__html:data.tagline}}></p>
                  </div>
                  <div className="arrows mb4 mt5 z2 relative" style={font}>
                    <button className={"z2 relative arrowlinks ph4 tc "+trigger[0]}>
                      <img className="mr3" src={tone1} width="48" height="48" alt="icons"/>
                      <p className="fw5 z10 relative">{data.section[0]}</p>
                    </button>
                    <button className={"z1 relative arrowlinks ph4 tc "+trigger[1]}>
                      <img className="ml4 mr3" src={tone2} width="48" height="48" alt="icons"/>
                      <p className="fw5 z10 relative">{data.section[1]}</p>
                    </button>
                    <button className={"relative arrowlinks ph4 tc "+trigger[2]}>
                      <img className="ml4 mr3" src={tone3} width="48" height="48" alt="icons"/>
                      <p className="fw5 z10 relative">{data.section[2]}</p>
                    </button>
                  </div>
                  <div id="section3-content" className={"cf bg-white relative active"+triggerCurrent} style={innerShadow}>
                    {listContent}
                  </div>
                </div>
              </section>
            )
          }}
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default Section2;
