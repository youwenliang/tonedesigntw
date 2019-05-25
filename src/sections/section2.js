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
      borderTop: "2px #dbe1e9 solid"
    }
    var innerShadow = {
      top: "-168px",
      position: "relative",
      boxShadow: "inset 0 0 10px rgba(86,86,86,.42)",
      width: "100vw"
    }
    return (
      <section id={gData["sections"][2]} style={sectionStyle}>
        <Controller>
          <Scene
            classToggle="start"
            indicators={false}
            triggerElement={'#trigger2'}
          >
            {(progress, event) => {
              console.log(progress);
              return (
                <div id="arrowTrigger" className="content">
                  <Header title={data.sectionTitle} color="#333333" margin={false}/>
                  <p className="tagline f4 fw4 color-content2 tc mt4 lh-copy ph2">{data.tagline}</p>
                  <div className="arrows mb4 mt5 f3 z2 relative">
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
                    <div className="pv5 ph4-ns ph2 mw8 center h5">
                      <div className="fl w-100 w-50-l relative">
                        <p>test</p>
                      </div>
                      <div className="fl w-100 w-50-l relative">
                        <p>test</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }}
          </Scene>
        </Controller>
      </section>
    );
  }
}

export default Section2;
