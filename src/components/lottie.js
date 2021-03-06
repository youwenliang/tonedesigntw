import React from 'react';
import Lottie from 'react-lottie';
import { Controller, Scene } from 'react-scrollmagic';

class LottieControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false, 
      isPaused: false,
      options: {
        loop: this.props.open ? false : (this.props.noloop ? false : true),
        autoplay: this.props.open ? false : true,
        animationData: this.props.data1,
        rendererSettings: this.props.render ? {preserveAspectRatio: 'none'} : {preserveAspectRatio: 'xMidYMid slice'}
      }
    };
  }

  render() {
    var $t = this;
    return (
      <div>
        <div id={$t.props.id}/>
        <Controller>
          <Scene
            offset={$t.props.offset}
            reverse={false}
            indicators={$t.props.i}
            triggerElement={'#'+$t.props.id}
          >
            {(progress, event) => {
              return (
                <Lottie 
                  options={$t.state.options}
                  eventListeners={!this.props.open ? [] : (this.props.noloop ? []:[
                    {
                      eventName: 'complete',
                      callback: () => {
                        //console.log($t.props.id+"---end")
                        $t.setState({
                          options: {
                            loop: true,
                            autoplay: true,
                            animationData: $t.props.data2
                          }
                        })
                      },
                    },
                  ])}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
              )
            }}
          </Scene>
        </Controller>
      </div>
    )
  }
}

export default LottieControl;
