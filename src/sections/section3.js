import React, { Component } from 'react';
import Header from '../components/header.js';

class Section3 extends Component {
  render() {
    var sectionStyle = {
      background: "#f7f8fa"
    }
    return (
      <section className="section-3" style={sectionStyle}>
        <div className="content ph4 mw9 center">
          <Header title="Section 3"/>
          <div className="cf ph2-ns mt5 pt2 flex items-center flex-column flex-row-l">
            <div className="fl w-100 w-50-l ph4 tr-l tc">
              <img src="https://fakeimg.pl/480x480/?text=image1"/>
            </div>
            <div className="fl w-100 w-50-l ph4 tl-l tc mw6 mt4 mt0-l">
              <h2>This is a title2</h2>
              <p className="lh-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section3;
