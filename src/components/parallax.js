import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const ParallaxStyled = styled.div`
  .parallax {
    position: relative;
    overflow: hidden;
    .parallax-bg {
      width: 100%;
      height: 150%;
      position: absolute;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
    }
  }
`;

const Parallax = (props) => (
  <ParallaxStyled>
    <Controller>
      <Scene
        indicators={false}
        duration="200%"
        triggerHook="onEnter"
      >
        <Timeline
          wrapper={<div className="parallax pv5rem" />}
        >
        <div className="mask z1" style={{backgroundColor:props.mask}}/>
          <Tween
            position="0"
            from={{
              yPercent: -50,
            }}
            to={{
                yPercent: -10,
            }}
          >
            <div className="parallax-bg" style={{background:"url("+props.img+")", backgroundSize: "cover", backgroundPosition: "11% bottom"}}/>
          </Tween>
          {props.content}
        </Timeline>
      </Scene>
    </Controller>
  </ParallaxStyled>
);

export default Parallax;