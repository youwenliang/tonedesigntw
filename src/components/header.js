import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 479 ? true : false
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
    if($(window).width() <= 479) $t.setState({mobile:true});
    else $t.setState({mobile:false});
  }
  render() {
  	var headerStyle = {
  		color: this.props.color,
      fontSize: this.state.mobile ? "1.875rem":"2.5rem"
  	}
    var m = this.props.margin ?  "mb5-ns mb4" : "mb0";
    return (
      <h1 className={"header hide z10 relative tc center mt0 ls-large fw4 "+m} style={headerStyle}>
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
