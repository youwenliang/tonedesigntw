import React, { Component } from 'react';
import Header from '../components/header.js';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import $ from 'jquery';
import gData from '../data/data.js';
import LottieControl from '../components/lottie.js';

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

var trigger = ["","",""];
var triggerCurrent = 0;

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
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][2]];

    var sectionStyle = {
      background: "#f7f8fa",
    }
    var mb = "mb70"
    var dn = this.props.display ? "":"dn";
    return (
      <section id={gData["sections"][2]} style={sectionStyle} className={"relative "+dn}>
        <div className="content ph4-ns ph2 mw54rem w-100 center z2 relative">
          <Header title={data.sectionTitle} color="#4C5B7F" margin={false}/>
          <p className={"tagline hide f4 fw3 color-fade tc mt4-ns mt3 lh-medium ls-medium ph2 "+mb}>{data.tagline}</p>
          <div className="opening2">
            <div className="mb50">
              <button className="w-100 opening f18 lh-copy fw4">test1</button>
              <div className="answers">
                <p className="lh-copy f5 fw3 color-content2">content1</p>
              </div>
            </div>
            <div className="mb50">
              <button className="w-100 opening f18 lh-copy fw4">test2</button>
              <div className="answers">
                <p className="lh-copy f5 fw3 color-content2">content2</p>
              </div>
            </div>
            <div className="">
              <button className="w-100 opening f18 lh-copy fw4">test3</button>
              <div className="answers">
                <p className="lh-copy f5 fw3 color-content2">content3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section2m;
