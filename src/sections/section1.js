import React, { Component } from 'react';
import Header from '../components/header.js';

class Section1 extends Component {
  render() {
    var sectionStyle = {
      background: "#f7f8fa"
    }
    return (
      <section className="section-1" style={sectionStyle}>
        <div className="content ph4 mw9 center">
          <Header title="Section 1"/>
          <div className="cf ph2-ns mt5 pt2">
            <div className="fl w-100 w-third-l ph2 tc">
              <img src="https://fakeimg.pl/360x360/?text=image1"/>
              <h2 className="mt4">This is a title2</h2>
              <p className="lh-copy mw5 center tl">Lorem ipsum dolor sit amet, consecte ipsum dolor sit amettur adipiscing elit.</p>
            </div>
            <div className="fl w-100 w-third-l ph2 tc mt0-l mt4">
              <img src="https://fakeimg.pl/360x360/?text=image2"/>
              <h2 className="mt4">This is a title2</h2>
              <p className="lh-copy mw5 center tl">Lorem ipsum dolor sit amet, consecte ipsum dolor sit amettur adipiscing elit.</p>
            </div>
            <div className="fl w-100 w-third-l ph2 tc mt0-l mt4">
              <img src="https://fakeimg.pl/360x360/?text=image3"/>
              <h2 className="mt4">This is a title2</h2>
              <p className="lh-copy mw5 center tl">Lorem ipsum dolor sit amet, consecte ipsum dolor sit amettur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;
