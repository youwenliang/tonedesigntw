import React, { Component } from 'react';
import Header from '../components/header.js';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import $ from 'jquery';
import gData from '../data/data.js';
import LottieControl from '../components/lottie.js';

import tone1 from '../images/icons/tone-1.svg';
import tone2 from '../images/icons/tone-2.svg';
import tone3 from '../images/icons/tone-3.svg';

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

var trigger = ["","",""]

class Section2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false,
      current: 0
    };
  }
  componentDidMount(){
    var $this = this;
    function checkMobile() {
      if($(window).width() <= 507) {
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
    var data = this.props.data[gData["sections"][2]];

    var sectionStyle = {
      background: "#f7f8fa",
    }
    var innerShadow = {
      top: "-168px",
      position: "relative",
      boxShadow: "inset 0 0 10px rgba(86,86,86,.42)",
      width: "100vw",
    }
    var number = {
      position: "relative",
      top: "-1.3px",
      left: "1.5px",
      textAlign: "center"
    };
    var bgColor = [
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
      "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
    ]
    var color = {
      background: bgColor[data.id - 1]
    }

    var listContent = [];
    var subContent = {
      marginTop: "32px",
    }
    for(var i = 0; i < 3; i++) {
      var temp = (
        <div id={"content"+(i+1)} className="sub-content cf pv5 ph4-ns ph2 mw8 center" key={i} style={subContent}>
          <div className="fl w-100 w-50-l relative color-content pr5">
            <h2 className="f225 fw5 mt0">{data.content[i]["title"]}</h2>
            <h3 className="f125 fw4">{data.content[i]["tagline"]}</h3>
            <LottieControl data1={animations[data.id-1][i]} open={false} id="animationContent" offset={0}/>
            <p className="fw3 lh-medium">{data.content[i]["paragraph"]}</p>
          </div>
          <div className="fl w-100 w-50-l relative pl5">
            <p className="f6 color-fade fw4 mt3 mb4">{data.content[i]["smalltitle"][0]}</p>
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
            </ul>
            <p className="f6 color-fade fw4 mt4 mb3">{data.content[i]["smalltitle"][1]}</p>
            <div className="cf fw5 f5 tc color-content">
              <div className="fl w-third">
                <img src={icons[data.id-1][i][0]} width="72px"/>
                <p className="mv0">{data.content[i]["smallitem"][0]}</p>
              </div>
              <div className="fl w-third">
                <img src={icons[data.id-1][i][1]} width="72px"/>
                <p className="mv0">{data.content[i]["smallitem"][1]}</p>
              </div>
              <div className="fl w-third">
                <img src={icons[data.id-1][i][2]} width="72px"/>
                <p className="mv0">{data.content[i]["smallitem"][2]}</p>
              </div>
            </div>
          </div>
        </div>
      );
      listContent.push(temp);
    }

    return (
      <Controller>
        <Scene duration={0} classToggle="start" triggerElement="#section3-content" indicators={true}>
          {(progress, event) => {
            if(event.type == "enter") {
              trigger = ["active","",""]
            } else if(event.type == "leave") {
              trigger = ["","",""]
            }
            return (
            <section id={gData["sections"][2]} style={sectionStyle} className="">
              <div id="arrowTrigger" className="content">
                <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
                <p className="tagline f4-ns f5 fw3 color-content tc mt4 mb4 lh-medium ls-medium ph2">{data.tagline}</p>
                <div className="arrows mb4 mt5 f3 z2 relative">
                  <button className={"z2 relative arrowlinks ph5 tc "+trigger[0]}>
                    <img className="mr2" src={tone1} width="48" alt="icons"/>
                    <p className="z10 relative">{data.section[0]}</p>
                  </button>
                  <button className={"z1 relative arrowlinks ph5 tc "+trigger[1]}>
                    <img className="ml4 mr2" src={tone2} width="48" alt="icons"/>
                    <p className="z10 relative">{data.section[1]}</p>
                  </button>
                  <button className={"relative arrowlinks ph5 tc "+trigger[2]}>
                    <img className="ml4 mr2" src={tone3} width="48" alt="icons"/>
                    <p className="z10 relative">{data.section[2]}</p>
                  </button>
                </div>
                <div id="section3-content" className="cf bg-white relative" style={innerShadow}>
                  {listContent}
                </div>
              </div>
            </section>
          )
        }}
        </Scene>
      </Controller>
    );
  }
}

export default Section2;
