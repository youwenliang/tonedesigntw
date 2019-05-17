import React, { Component } from 'react';

class Cover extends Component {
  render() {
  	var coverStyle = {
  		width: "100%",
  		height: "100vh",
  		background: "linear-gradient(to right, rgba(255,151,142,1) 0%,rgba(255,91,130,1) 100%)",
      paddingTop: "74px"
  	}
    return (
      <header className="cover flex justify-center items-center" style={coverStyle}>
        <div className="content ph4 mw8 center">
          
        </div>
      </header>
    );
  }
}

export default Cover;
