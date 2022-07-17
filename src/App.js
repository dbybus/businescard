import './App.css';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import  TextPlugin  from "gsap/TextPlugin";

import { CustomEase } from "gsap/CustomEase";

function App() {

  const selectAll = e => document.querySelectorAll(e);
  gsap.registerPlugin(CustomEase, TextPlugin);
  const stage = document.getElementsByClassName('stage');
  const square = document.getElementsByClassName('square');
  const squareFrame = document.getElementsByClassName('.square__frame');
  const global = gsap.timeline({ delay: 0.5 });
  const loopTime = 16;
  const ballDuration = loopTime/8;
  const introRotTime = 1.3;
  const introRotDelay = 0.5;
  const squareDelay = introRotTime+introRotDelay;
  const patch = document.getElementsByClassName('dark-patch-small');

  const constEase = CustomEase.create("custom", 
      // start
      // start handle
                                      
      // handle 1.1
      // point 1
      // handle 1.2
                                      
      // etc…
                                      
    `M0,0,
      C0.1,0.025,

      0.125,0.225,
      0.25,0.25,
      0.375,0.275,

      0.375,0.475,
      0.5,0.5,
      0.625,0.525,

      0.625,0.725,
      0.75,0.75,
      0.875,0.775,

      0.875,0.975
      ,1,1`);

  function introAnimation() {
      let tl = gsap.timeline();
      
      tl.to(".dark-patch-small", {delay: 0.8, ease: 'power4.easeOut', duration: 1, y: 600})
      .from('.square__large', {
          scaleX: 0,
          duration: 2,
          ease: 'power4.inOut',
          transformOrigin: "right center"
      }, 0)
      
      .to('.square-frame', { 
          rotation: 16,
          duration: introRotTime,
          ease: CustomEase.create("custom", "M0,0,C0.234,0.528,0.524,0.828,1,1")
      }, introRotDelay)
      .from('.square__small', {
          scaleX: 0,
          duration: 2,
          ease: 'power4',
          transformOrigin: "right center"
      }, 1.1)
      .set(['.ball', '.dark-patch'], { visibility: 'visible' }, 1.3)
      .fromTo('.pitch', {autoAlpha: 0}, {
        duration: 1.25, 
        autoAlpha: 1, 
      }, 0.8)
      .fromTo('.ball', {
          x: -206,
      }, {
          x: 58,
          ease: 'ballBounce',
          duration: 2
      }, 1.3)
      
      return tl;
  }

  function patchSquare() {
    let tl = gsap.timeline();
    
    tl.to('#name', {
      duration: 2.2,
      text: 'Dmitri Baibus',
      ease: 'none',
      delimitter: ' ',
    }, 0.4)
    return tl
  }

  function loopSquare() {
      let tl = gsap.timeline( {
          repeat: -1
      });

      tl.to(square, { 
          duration: loopTime, 
          ease: constEase, 
          rotation: "+=360",
          transformOrigin: "center center"
      })
      return tl
  }

  function loopBall() {
      let tl = gsap.timeline({
          repeat: -1,
          repeatDelay: ballDuration,
          defaults: {
            ease: 'ballBounce',
              duration: ballDuration 
          }
      });
      
      tl.to('.ball', {
          y: -58
      })
      .to('.ball', {
          x: 0
      }, loopTime/4)
      .to('.ball', {
          y: 0
      }, loopTime/2)
      .to('.ball', {
          x: 58
      }, loopTime*0.75)
      
      return tl;
  }

  function animInContent() {
      let tl = gsap.timeline({
          defaults: {
              ease: 'power4.easeOut',
              duration: 2,
          }
      });
      
      tl.from('.bandChar', {
          y: -120,
          stagger: 0.05
      }).fromTo('.smallBand', {stagger: 0.1, autoAlpha: 0}, {
        duration: 1.25, 
        ease: 'bounce', 
        autoAlpha: 1, 
      }, 0.5).fromTo('.date', {stagger: 0.1, autoAlpha: 0}, {
        duration: 1.25, 
        autoAlpha: 1, 
      }, 0.8).fromTo('.location', {stagger: 0.1, autoAlpha: 0}, {
        duration: 1.25,  
        autoAlpha: 1, 
      }, 1.2).fromTo('.support', {stagger: 0.1, autoAlpha: 0}, {
        duration: 1.25, 
        autoAlpha: 1,
      }, 1.4);
      
      return tl;
  }

  function animate() {
      
      gsap.set(stage, { 
          autoAlpha: 1
      });
      gsap.set('.square-frame', { 
          transformOrigin: "center center",
          x: -141,
          y: -217
      });
      
      global.add(introAnimation())
          .add(patchSquare(), 0.5)
          .add(animInContent(), 1.5)
          .add(loopSquare(), squareDelay)
          .add(loopBall(), 4.8);
  }

  function resize() {
    let vh = window.innerHeight;
    let sh = stage.offsetHeight;
    let scaleFactor = vh/sh;
    if(scaleFactor<1) {
      gsap.set(stage, { scale: scaleFactor });
    }
    else {
          gsap.set(stage, { scale: 1 });
      }
  }

  function init() {
      resize();
      animate();
      stage.onclick = () => {
          global.restart();
      }
  }

  useEffect(() =>{
    window.onresize = resize;
    init();
    
  }, []);
  return (
    
    <div className="stage">
      <svg className="svg" viewBox="0 0 716 1008" xmlns="http://www.w3.org/2000/svg">
          <rect className="dark-patch" width="100" height="150" x="616" fill="#010005" />
          <g className="square-frame">
              <g className="square" id="squareObject">
                <rect className="square__large" width="868" height="868" fill="#010005" />
                <rect className="square__small" x="303" y="303" width="262" height="262" fill="#F68513" />
                <circle className="ball" cx="405" cy="463" r="103" fill="#010005" />                
              </g>
          </g>
          <text className="pitch" x="230" y="200">Simplicity is the key to success</text>
          <text className="pitch" x="495" y="250">Be reactive...</text>    
          <rect className="dark-patch-small" width="15" height="150" x="10" y="300" fill="#010005" /> 
      </svg>
      <h6 className="band" id="name"></h6>
      <h6 className="smallBand">Software Engineer</h6>
      <div className="details">
          <p className="date"><span>Interactive design</span><span> that suits your Business</span></p>
          <p className="location"><span>Bring any feature you want </span><span>inside your </span><span>Application</span></p>
          <p className="support"><span>Build Web3 adaptive </span><span>interface</span></p>
      </div>
</div>

  );
}

export default App;
