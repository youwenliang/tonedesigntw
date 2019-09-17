import React, { Component } from 'react';
import Header from '../components/header.js';
import gData from '../data/data.js';
import $ from 'jquery';

class CTA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 768 ? true : false
    }
    this.checkMobile = this.checkMobile.bind(this);
  }
  componentDidMount() {
    var $t = this;
    window.addEventListener('resize', $t.checkMobile, false);
  }
  componentWillUnmount(){
    var $t = this;
    window.removeEventListener('resize', $t.checkMobile, false);
  }
  checkMobile() {
    var $t = this;
    if($(window).width() <= 768) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
    // import data
    var data = this.props.data[gData["sections"][3]];
    var sectionStyle = {
      background: "#ffffff",
    }
    var content = this.state.mobile ? (
      <div className="cf ph2-ns nowrap overflow-x-scroll overflow-y-hidden">
        <div className="dib w-80 pa2">
          <div className="outline bg-white pv4">1</div>
        </div>
        <div className="dib w-80 pa2">
          <div className="outline bg-white pv4">2</div>
        </div>
        <div className="dib w-80 pa2">
          <div className="outline bg-white pv4">3</div>
        </div>
      </div>
    ):(
      <div className="cf ph2-ns">
        <div className="fl w-third pa2">
          <div className="outline bg-white pv4">1</div>
        </div>
        <div className="fl w-third pa2">
          <div className="outline bg-white pv4">2</div>
        </div>
        <div className="fl w-third pa2">
          <div className="outline bg-white pv4">3</div>
        </div>
      </div>
    )
    
    return (
      <section id={gData["sections"][3]} style={sectionStyle}>
        <div className="mw9 center ph3-ns">          
          {content}
        </div>
      </section>
    );
  }
}

export default CTA;
