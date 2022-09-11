import './App.css';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import  TextPlugin  from "gsap/TextPlugin";
import mySvg from './TUMULT_Logo.svg';
import { CustomEase } from "gsap/CustomEase";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cavern from "./cavern.PNG"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import hero from "./heroimage.PNG"
import tumult from "./tumult1.PNG"
import sponsor from "./sponsor.png"
import tumultDot from "./tumult_dot.png"
import djLancer from "./djlancer.jpeg"
import djWiz from "./djwiz.jpeg"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//import CustomCursor from "./CustomCursor";
const useStale = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',

  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    backgroundSize: 'contain',
    boxShadow: "none",
    border: `1px solid black`,
  },
  pad: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 40,
    paddingBottom: 40  
  },
  guest: {
    fontSize: 200,
    backgroundColor: "#00FE01",
    padding: 125
  },
  fontGreen: {
    color: "#00FE01"
  },
  backGroundGreen: {
    background: "#00FE01",
    minHeight: 100
  },
  bigText: {
    fontSize: 80,
  },
  normalText: {
    fontSize: 50,
  },
  smallText: {
    fontSize: 25,
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  mask: {
    visibility: 'hidden',
    position: 'relative',

    overflow: 'hidden',
  },
  tumutlSvg: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: '25%',
    display:'block',
    bottom: 0,
    height: 50,
    width: 700
  },
  navBar: {
    justifyContent: 'space-between',
    display: 'flex'
  },
  wrap: {
    position: 'static'
  },
  stickySection: {
    position: 'sticky',
    top:0
  },
  heroSection: {
    position: 'relative',
  }
}));

function Tumult() {
  
  gsap.registerPlugin(CustomEase, TextPlugin, ScrollTrigger);
  var select = e => document.querySelector(e);
  var selectAll = e => document.querySelectorAll(e);
  var rowSelector = selectAll(".row-selector");
  const classes = useStale();
  const [hover, setHover] = useState(false);

  useEffect(() =>{
    
    const tumult = document.getElementById('hero-img')
    const tumultLogo = document.getElementById('tumultLogo')  

    let tl = gsap.timeline({
      defaults: {
          ease: 'power2.easeInOut',
          duration: 2,
          delay: .7,
        }
    });

    tl.set(tumult, {autoAlpha: 1})
    tl.fromTo(tumult, {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
    },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
      
    });
   
    
    let tl1 = gsap.timeline({
      duration: 3,
      ease: 'power2.easeInOut',
      scrollTrigger: {
        trigger: tumultLogo,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
        //markers: true
      }
    });

    tl1.fromTo(tumultLogo, 
    {
      height: 200, 
      duration: 5,
      y: -300,
      x: '15%'
    },
    {   
      height: '50', 
      duration: 5,
      y: '-50%',
      x: '-90%'
    });

    
 
    // rowSelector.forEach((slide, i) => {
       
    //   let tl2 = gsap.timeline({
    //     duration: 3,
    //     ease: 'power2.easeInOut',
    //     scrollTrigger: {
    //       trigger:  slide,
    //       start: 'top center',
    //       end: 'bottom top',
    //       scrub: 1,
    //       markers: true
    //     }
    //   });

    //   tl2.from(slide, {
    //     y: '100%',
    //     duration: 1
    //   })
    //   console.log(slide)
    // })
  }, []);

return (
  <div className={classes.root} >
    <CustomCursor
      targets={['.link', '.your-css-selector']}
      customClass='custom-cursor'
      dimensions={30}
      fill= {hover ? '#FFFFFF': "#00FE01"}
      strokeColor={hover ? '#FFFFFF': "#99ff99"}
      strokeWidth={0.5}
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 0.2,
      }}
      targetOpacity={0.5}
    />
    <section className={classes.heroSection}>
      <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} className="grid-hero" >
            <Paper square id="dog-hero" className={classes.paper}>
              <img id='hero-img' src={hero} />
            </Paper>
            </Grid>
          <Grid item xs={2}></Grid>
      </Grid>
    </section> 
    <div className={classes.wrap}>
      <section className={classes.stickySection}>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} className="grid-hero">
          <AppBar id="navBar" position="sticky" className={classes.navBar}>
            <Toolbar className={classes.backGroundGreen}>
              <IconButton edge="start" 
                className={classes.menuButton} 
                color="inherit" aria-label="menu">
                  <MenuIcon />
              </IconButton>
              <svg id="tumultLogo" className={classes.tumutlSvg}  version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="4961.000000pt" height="1171.000000pt" viewBox="0 0 4961.000000 1171.000000"
                    preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,1171.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M380 11433 c0 -5 -5 -46 -10 -93 -12 -103 -220 -2456 -220 -2486 0
                        -23 9 -25 242 -40 96 -7 97 -7 102 17 3 13 17 141 31 283 126 1235 314 1661
                        793 1786 163 43 212 45 1032 45 l785 0 69 -33 c118 -56 186 -151 206 -289 13
                        -94 13 -8850 0 -9068 -17 -277 -60 -419 -159 -527 -151 -164 -423 -231 -1016
                        -247 l-240 -6 -3 -142 -3 -143 1851 0 1850 0 0 145 0 145 -158 0 c-190 0 -440
                        15 -582 36 -392 57 -574 189 -640 465 -11 46 -24 136 -30 199 -15 169 -14
                        9101 1 9172 27 126 106 225 217 270 l57 23 785 0 c719 0 794 -2 890 -18 57
                        -11 134 -28 170 -39 79 -24 199 -87 259 -135 136 -112 252 -322 330 -598 74
                        -265 152 -769 196 -1267 l7 -78 38 0 c40 0 303 21 307 24 2 1 -42 510 -97
                        1132 -55 621 -100 1139 -100 1152 0 22 1 22 164 22 182 0 367 -12 527 -35 322
                        -46 501 -146 589 -329 45 -95 65 -179 80 -331 7 -74 10 -1200 10 -3415 0
                        -3304 2 -3472 36 -3790 137 -1292 695 -2190 1637 -2635 288 -136 637 -237 997
                        -289 245 -35 340 -41 705 -41 327 0 389 3 535 23 411 56 688 136 1006 292 847
                        414 1378 1244 1554 2431 57 389 53 133 60 3934 6 3206 8 3498 23 3585 49 276
                        147 408 365 493 368 142 1120 131 1438 -23 181 -87 264 -211 311 -460 17 -90
                        18 -334 21 -4485 3 -4466 2 -4574 -34 -4754 -36 -182 -137 -320 -287 -394
                        -181 -89 -514 -137 -944 -137 l-153 0 0 -145 0 -145 1665 0 1666 0 -3 142 -3
                        143 -135 2 c-495 8 -796 53 -973 145 -171 89 -248 210 -294 463 -15 82 -17
                        469 -20 4603 l-3 4513 21 -3 c19 -3 203 -543 1744 -5143 l1722 -5140 200 -3
                        199 -2 1765 5212 c1368 4041 1769 5214 1782 5216 16 3 17 -254 17 -4555 0
                        -3261 -3 -4584 -11 -4648 -24 -199 -69 -312 -162 -411 -100 -107 -257 -171
                        -512 -209 -137 -20 -388 -35 -577 -35 l-158 0 0 -145 0 -145 1850 0 1850 0 0
                        143 0 144 -257 6 c-590 15 -851 79 -1009 250 -106 114 -147 252 -164 547 -13
                        235 -13 8520 0 8760 20 354 84 515 247 623 153 101 362 149 743 172 211 13
                        574 -29 748 -87 261 -87 375 -244 411 -572 8 -65 11 -1115 11 -3353 0 -1984 4
                        -3348 10 -3488 31 -714 163 -1287 411 -1785 463 -928 1257 -1430 2474 -1562
                        161 -17 791 -18 940 0 897 105 1541 448 2001 1064 341 457 566 1075 654 1802
                        45 368 43 278 50 3891 4 1903 10 3474 14 3490 4 17 14 62 23 100 60 273 250
                        413 636 469 194 29 396 38 560 26 655 -46 858 -198 907 -679 14 -145 14 -8839
                        -1 -8982 -14 -144 -35 -232 -75 -316 -124 -261 -391 -352 -1081 -370 l-253 -6
                        0 -144 0 -143 3279 0 3279 0 17 77 c9 43 158 690 330 1438 173 748 315 1369
                        317 1379 3 18 -15 24 -175 61 -175 42 -177 42 -182 21 -217 -915 -390 -1473
                        -563 -1811 -216 -422 -458 -604 -889 -667 -68 -10 -377 -13 -1388 -13 -1201 0
                        -1306 1 -1375 17 -157 37 -253 108 -311 232 -37 80 -56 168 -69 331 -8 90 -10
                        1467 -7 4515 3 4677 1 4433 47 4600 37 136 138 265 255 326 174 92 415 132
                        860 142 l270 7 0 145 0 145 -3167 3 -3168 2 0 -150 0 -150 188 0 c229 0 427
                        -14 591 -41 439 -73 592 -234 631 -663 8 -86 10 -1119 8 -3541 -4 -3733 0
                        -3467 -58 -3850 -112 -731 -400 -1325 -824 -1697 -461 -404 -1103 -593 -1869
                        -550 -401 23 -703 83 -989 198 -691 277 -1126 821 -1333 1667 -69 278 -107
                        573 -125 952 -13 295 -14 6519 0 6743 20 329 79 482 229 593 167 123 424 175
                        924 186 l277 6 0 148 0 149 -2786 -2 -2786 -3 -1539 -4580 c-1828 -5441 -1728
                        -5145 -1744 -5145 -8 0 -30 49 -54 122 -659 2000 -3166 9578 -3172 9590 -9 17
                        -141 18 -2604 18 l-2595 0 0 -149 0 -148 268 -6 c706 -15 983 -123 1088 -427
                        61 -176 57 67 61 -3575 4 -3377 3 -3554 -33 -3880 -155 -1415 -856 -2254
                        -2029 -2429 -549 -82 -1244 -12 -1683 170 -911 377 -1372 1184 -1452 2539 -14
                        237 -13 6728 1 6890 47 551 277 693 1159 714 l265 6 0 145 0 145 -5302 3
                        c-2917 1 -5303 -1 -5303 -5z"/>
                        <path d="M42296 11398 c-14 -98 -230 -2557 -225 -2562 7 -7 317 -29 331 -23
                        10 3 18 46 27 148 37 420 107 884 171 1135 126 496 308 720 654 809 148 37
                        212 40 1016 40 l785 0 69 -33 c118 -56 186 -151 206 -289 13 -93 13 -8848 0
                        -9071 -17 -272 -60 -416 -159 -524 -151 -164 -423 -231 -1016 -247 l-240 -6
                        -3 -142 -3 -143 1851 0 1850 0 0 145 0 145 -158 0 c-190 0 -440 15 -582 36
                        -236 34 -389 93 -489 189 -107 102 -159 238 -180 475 -16 168 -15 9100 0 9172
                        27 126 107 226 218 270 l56 23 785 0 c719 0 794 -2 890 -18 371 -66 552 -218
                        698 -587 104 -263 201 -809 258 -1452 l6 -78 38 0 c40 0 303 21 307 24 3 3
                        -201 2322 -218 2486 -6 58 -13 108 -16 113 -2 4 -1560 7 -3462 7 l-3459 0 -6
                        -42z"/>
                      </g>
              </svg>
            </Toolbar>
          </AppBar>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </section>
      <section>
        <div className='row-selector'>
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} className="grid-hero">
              <Paper square className={classes.paper}><p className={classes.bigText}>Celebrating Electronic Music</p></Paper>
              </Grid>
            <Grid item xs={2}></Grid>
      </Grid>
      </div>
      <div className='row-selector'>
        <Grid className='row-selector' container>
          <Grid item xs={2}></Grid>
          <Grid item xs={4} className="grid-hero">
            <Paper square className={classes.paper}><p className={classes.normalText}>Saturday, October 15</p></Paper>
            </Grid>
            <Grid item xs={4} className="grid-hero">
            <Paper square className={classes.paper}><p className={classes.normalText}>LOFT Salzburg</p></Paper>
            </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
      <div className='row-selector'>
        <Grid container>
              <Grid item xs={2}>
              
              </Grid>
              <Grid item xs={8} className="grid-hero">
                <Paper square className={classes.paper +' '+ classes.pad} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><p className={classes.guest}>SAFE YOUR SPOT ON THE GUESTLIST <br></br><span className={classes.smallText}>NOW</span></p></Paper>
                </Grid>
              <Grid item xs={2}>
              
              </Grid>
        </Grid>
      </div>
      <div className='row-selector'>
      <Grid container>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8} className="grid-hero">
              <Paper square className={classes.paper}><p className={classes.bigText}>Lineup and Timeline</p></Paper>
              </Grid>
            <Grid item xs={2}>
            
            </Grid>
      </Grid>
      </div>
      <div className='row-selector'>
      <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={4} className="grid-hero">
              <Paper square className={classes.paper}><p className={classes.fontGreen}>DOORS OPEN AT 22 PM</p></Paper>
              </Grid>
              <Grid item xs={4} className="grid-hero">
              <Paper square className={classes.paper}><p className={classes.fontGreen}>WARM UP VIBES (NIKI)</p></Paper>
              </Grid>
            <Grid item xs={2}> </Grid>
      </Grid>
      </div>
      <Grid container>
            <Grid item xs={2}>
            
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={4} className="grid-hero">
              <Paper square className={classes.paper}><img src={djWiz} className='djsImg'/></Paper>
              </Grid>
              <Grid item xs={4} className="grid-hero">
              <Paper square className={classes.paper}><img src={hero} className='djsImg'/></Paper>
              </Grid>
              <Grid item xs={4} className="grid-hero">
              <Paper square className={classes.paper}><img src={djLancer} className='djsImg'/></Paper>
              </Grid>
            </Grid>
            <Grid item xs={2}>
            
            </Grid>
      </Grid>
      <Grid container>
            <Grid item xs={2}>
            
            </Grid>
            <Grid container item xs={8}>
              <Grid item xs={4} className="grid-hero">
              <Paper square className={classes.paper}><h6>DJ WIZ JR.</h6></Paper>
              </Grid>
              <Grid item xs={4} className="grid-hero">
              <Paper square className={classes.paper}><h6>JANN DOLL AND STEFAN RAITH</h6></Paper>
              </Grid>
              <Grid item xs={4} className="grid-hero">
              <Paper square className={classes.paper}><h6>LANCER AND ATTAL</h6></Paper>
              </Grid>
            </Grid>
            <Grid item xs={2}>
            
            </Grid>
      </Grid>
      <Grid container>
            <Grid item xs={2}>
            
            </Grid>
            <Grid item xs={8} className="grid-hero">
              <Paper square className={classes.paper}><h6 className={classes.fontGreen}>CLOSING AT 6 AM</h6></Paper>
              </Grid>
            <Grid item xs={2}>
            
            </Grid>
      </Grid>
      <Grid container>
            <Grid item xs={2}>
            
            </Grid>
            <Grid item xs={8} className="grid-hero">
              <Paper square className={classes.paper} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><img src={tumult} /></Paper>
              </Grid>
            <Grid item xs={2}>
            
            </Grid>
      </Grid>
      <Grid container>
            <Grid item xs={2}>
            
            </Grid>
            <Grid item xs={8} className="grid-hero">
              <Paper square className={classes.paper}><p className={classes.bigText}>In Cooperation With</p></Paper>
              </Grid>
            <Grid item xs={2}>
            
            </Grid>
      </Grid>
      <div className='row-selector'>
      <Grid container>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8} className="grid-hero">
              <Paper square className={classes.paper}><img src={sponsor} /></Paper>
              </Grid>
            <Grid item xs={2}>
            
            </Grid>
      </Grid>
      </div>
      <div className='row-selector'>
      <Grid container>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
              <Paper square className={classes.paper}><div className="dotGrid"><img className='tumultDot' src={tumultDot} /></div></Paper>
              </Grid>
            <Grid item xs={2}>
            
            </Grid>
      </Grid>
      </div>
    </section>   
    </div>
  </div>
  );
}

export default Tumult;
