import React from 'react';
import './App.css';
import MainBodyLandscape from '../src/components/landscape/MainBodyLandscape/MainBodyLandscape';
import MainBodyPortrait from '../src/components/portrait/MainBodyPortrait/MainBodyPortrait';
import topImage from '../src/media/images/hello-world.png';
import workImage from '../src/media/images/computer-lady-hands.png';
import aboutImage from '../src/media/images/lindsay-glasses.png';
import contactImage from '../src/media/images/red-phone.jpg';
import CreativeDiv from '../src/components/creativeDiv/creativeDiv';


let screenOrientation= null;
if((window.innerHeight / window.innerWidth) < .87){
  screenOrientation= "landscape";
} else {
  screenOrientation= "portrait";
};

class App extends React.Component {
  
  state= {
    siteTitle: 'Lindsay K. Johnston',
    sectionShown:'top',
    menuModalShown: false,
    screenOrientation:screenOrientation,
    sections: [
      { id: "top",
        title: null,
        image: topImage,
        content1: null, 
        content2:
          <div>
            <h1>Welcome to my portfolio!</h1>
            <p>Take a peek at what I do...</p>
          </div>,
        },
        { id: "creative",
        title: "Creative",
        image: null,
        content1: <CreativeDiv/>,
        content2: null,
        },
        { id: "web-development",
        title: "Web Development",
        image: workImage,
        content1: 
          <div>
            <ul>
            <li>
                <a href="https://www.vannaoh.com/" target="_blank" rel="noreferrer">
                  Vanna Oh! - Musician Website</a>
              </li>
              <li>
                <a href="https://www.micahclay.us/" target="_blank" rel="noreferrer">
                  Micah Clay - Musician Website</a>
              </li>
              <li>
                <a href="https://github-map-real.herokuapp.com/" target="_blank" rel="noreferrer">
                 GitHub User Map - API Study</a>
              </li>
              <li>
                <a href="https://master.d2sxml8azj8dyl.amplifyapp.com/" target="_blank" rel="noreferrer">
                 Points Calculator - CSV Upload Study</a>
              </li>
              <li>
                <a href="https://main.d25r1kk5mc9ae9.amplifyapp.com/" target="_blank" rel="noreferrer">
                 Chipotle Clone - React.js Study</a>
              </li>
            </ul> 
          </div>   
          ,
        content2: null
        },
       
        { id: "about",
        title: "About",
        image: aboutImage,
        content1: 
          <div>
            <h2>Lindsay K. Johnston</h2>
            <h3>Creator & Entrepeneur</h3>
          </div>,
        content2:
          <div>
            <p>My work experiences have varied greatly: from the non-profit sector to the service industry, from education to creative director for a rock-and-roll band. The common threads that weave through all of my professional experiences are creativity and innovation. Whether I am creating a teaching strategy, an app or a t-shirt design, I am always looking to improve upon prior work and present the project in an engaging and professional way. I strive to communicate directly and honestly, work efficiently, and push for female representation in historically male-dominated fields.</p>
            <button> <a href="https://lindsayjohnston.github.io/Portfolio-2020/Lindsay_Johnston_web_developer_resume_June_2021.pdf" target="_blank" rel="noreferrer">Resume</a> </button>
          </div>
          
        },
        { id: "contact",
        title: "Contact",
        image: contactImage,
        content1: 
          <div>
            <h3>E-mail:</h3>
            <a href="mailto:bocaloudcontact@gmail.com" >bocaloudcontact@gmail.com</a>
            <h3>Social:</h3>
            <a href="https://www.instagram.com/bocaloud/" target="_blank" rel="noreferrer" >Instagram</a>
          </div>
        },
    
    ]
  }

  constructor(props) {
    super(props);
    this.checkScreenOrientation = this.checkScreenOrientation.bind(this);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
    this.sectionShownHandler.bind(this);
    this.menuModalCloseHandler.bind(this);
    this.menuModalOpenHandler.bind(this);
  }

  checkScreenOrientation = () => {
    let newOrientation= null;

    if((window.innerHeight/ window.innerWidth) < .87){
      newOrientation= "landscape";
    } else {
      newOrientation= "portrait";
    } 

    if(newOrientation !== this.state.screenOrientation){
      this.setScreenOrientation(newOrientation);
    }
  }

  setScreenOrientation= (newOrientation)=>{
    this.setState({
      screenOrientation: newOrientation
    })
  }

  sectionShownHandler = (sectionId) =>{
    this.setState ({
      sectionShown : sectionId
    })
  }

  menuModalCloseHandler = () =>{
    this.setState ({
      menuModalShown: false
    })
  }

  menuModalOpenHandler = () =>{
    this.setState ({
      menuModalShown: true
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkScreenOrientation);
    window.addEventListener("orientationchange", this.checkScreenOrientation);
  }

  render(){
    let appBody = null;
    let appClasses= "";
 
    if (this.state.screenOrientation === "landscape") {
      appBody = <MainBodyLandscape 
                  siteTitle={this.state.siteTitle}
                  menuClick = {this.sectionShownHandler}
                  sectionShown= {this.state.sectionShown} 
                  sections={this.state.sections} />;
      appClasses= "appLandscape";
    } else {
      appBody = <MainBodyPortrait 
                  siteTitle={this.state.siteTitle}
                  barsClick= {this.menuModalOpenHandler}
                  closeModalClick={this.menuModalCloseHandler}
                  menuModalShown= {this.state.menuModalShown}
                  sectionShown= {this.state.sectionShown} 
                  sections={this.state.sections}
                />;
      appClasses= "appPortrait";
    }

    return (
      <div className={appClasses}>
        {appBody}
        
      </div>
    );

  }
  
}

export default App;
