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
        loop: this.props.open ? false : true,
        autoplay: this.props.open ? false : true,
        animationData: this.props.data1,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
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
            triggerElement={'#'+$t.props.id}
          >
            {(progress, event) => {
              return (
                <Lottie 
                  options={$t.state.options}
                  eventListeners={!this.props.open ? [] : [
                    {
                      eventName: 'complete',
                      callback: () => {
                        $t.setState({
                          options: {
                            loop: true,
                            autoplay: true,
                            animationData: $t.props.data2
                          }
                        })
                      },
                    },
                  ]}
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
