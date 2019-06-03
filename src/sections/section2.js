import React, { Component } from 'react';
import Header from '../components/header.js';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import $ from 'jquery';
import gData from '../data/data.js';

import tone1 from '../images/icons/tone-1.svg';
import tone2 from '../images/icons/tone-2.svg';
import tone3 from '../images/icons/tone-3.svg';

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
    for(var i = 0; i < 3; i++) {
      var temp = (
        <div id={"content"+(i+1)} className="cf pv5 ph4-ns ph2 mw8 center" key={i}>
          <div className="fl w-100 w-50-l relative color-content pr5">
            <h2 className="f225 fw5 mt0">{data.content[i]["title"]}</h2>
            <h3 className="f125 fw4">{data.content[i]["tagline"]}</h3>
            <p className="fw3 lh-medium">{data.content[i]["paragraph"]}</p>
          </div>
          <div className="fl w-100 w-50-l relative pl5">
            <p className="f6 color-fade fw4 mt0 mb4">{data.content[i]["smalltitle"][0]}</p>
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
            <p className="f6 color-fade fw4 mv4">{data.content[i]["smalltitle"][1]}</p>
            <div className="cf fw5 f125 tc color-content">
              <div className="fl w-third">
                <p>{data.content[i]["smallitem"][0]}</p>
              </div>
              <div className="fl w-third">
                <p>{data.content[i]["smallitem"][1]}</p>
              </div>
              <div className="fl w-third">
                <p>{data.content[i]["smallitem"][2]}</p>
              </div>
            </div>
          </div>
        </div>
      );
      listContent.push(temp);
    }

    return (
      <section id={gData["sections"][2]} style={sectionStyle}>
        <div id="arrowTrigger" className="content">
          <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
          <p className="tagline f4-ns f5 fw3 color-content tc mt4 mb4 lh-medium ls-medium ph2">{data.tagline}</p>
          <div className="arrows mb4 mt5 f3 z2 relative o-0">
            <div id="trigger2"/>
            <button className="z2 relative arrowlinks ph5 tc">
              <img className="mr2" src={tone1} width="48" alt="icons"/>
              <p className="z10 relative">{data.section[0]}</p>
            </button>
            <button className="z1 relative arrowlinks ph5 tc">
              <img className="ml4 mr2" src={tone2} width="48" alt="icons"/>
              <p className="z10 relative">{data.section[1]}</p>
            </button>
            <button className="relative arrowlinks ph5 tc">
              <img className="ml4 mr2" src={tone3} width="48" alt="icons"/>
              <p className="z10 relative">{data.section[2]}</p>
            </button>
          </div>
          <div id="section3-content" className="cf bg-white" style={innerShadow}>
            {listContent}
          </div>
        </div>
      </section>
    );
  }
}

export default Section2;
