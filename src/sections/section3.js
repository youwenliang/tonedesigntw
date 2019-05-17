import React, { Component } from 'react';
import Header from '../components/header.js';
import Button from '../components/button.js';

import circle from '../images/circle.png';
import waves from '../images/waves.png';

class Section3 extends Component {
  render() {
    var sectionStyle = {
      background: "#ffffff"
    }
    var mask = {
      top: 0,
      left: 0,
      zIndex: 0
    }
    return (
      <section className="section-3" style={sectionStyle}>
        <div className="content ph4 mw9 center">
          <Header title="Omni Channel" color="#4c5b7f"/>
          <div className="cf ph2-ns pt2 flex items-center flex-column flex-row-l">
            <div className="fl w-100 w-50-l tr-l tc relative">
              <img className="z1 relative" src={circle} alt="test"/>
              <div className="absolute" style={mask}>
              	<img src={waves} alt="test"/>
              </div>
            </div>
            <div className="fl w-100 w-50-l ph4 tl-l tc mw6 mt4 mt0-l">
              <h2 className="f2 color-content fw6">This is a title2</h2>
              <p className="lh-copy f4 color-content mb4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum d.</p>
              <Button content="Contact!"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section3;
