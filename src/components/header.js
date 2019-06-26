import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      mobile: false
    }
  }
  componentDidMount() {
    var $t = this;
    function checkMobile() {
      if($(window).width() <= 479) {
        $t.setState({mobile:true});
      }
      else $t.setState({mobile:false});
    }
    $(window).on('resize orientationchange', checkMobile);
    $(document).ready(function(){
      checkMobile();
    });
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
