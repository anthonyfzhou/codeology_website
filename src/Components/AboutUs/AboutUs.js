import React from 'react';
import './front.svg';

import Wall from './Constants/Wall.png';
import TextSection from './TextSection.js';
import PictureSection from './PictureSection.js';
import WallImage from './WallImage.js';

import {actives} from './Constants/members.js';
import {leadership} from './Constants/members.js'
import {projectLeaders} from './Constants/members.js';


function App() {
  
  return (
    <div className="App">
      <WallImage />

      <TextSection />

      <img id="RedHand" src={require('./Constants/images/Cartoons/red arm.png')} />
      <PictureSection title={"Executive Leadership"} people={leadership}/>

      <img id="PinkHand" src={require('./Constants/images/Cartoons/pink arm.png')} />
	  <PictureSection title={"Project Leaders"} people={projectLeaders}/>

	  <img id="GreenHand" src={require('./Constants/images/Cartoons/green arm.png')} />
	  <PictureSection title={"Active Members"} people={actives}/>
		  
    </div>
  );
}

export default App;





