import React from 'react';
import Heading from './Heading.js';

function TextSection() {

	return (
		<div id="textSection">
		        <img id="GreenPuzzle" src={require('./Constants/images/Cartoons/puzzle.png')} />

                {/* I hide this in desktop view but i added it because im bad at css */}
                <div id="mobilePictureHolder">
                    <img id="pictureMobile" src={require('./Constants/images/sample.png')} />
                </div>
                <img id="puzzle2" src={require('./Constants/images/Cartoons/puzzle2.png')} />
                <img id="puzzle3" src={require('./Constants/images/Cartoons/puzzle3.png')} />
                
		        <div id="textHolder">
                    Ooga Booga we are a CS club that occasionally Oogas and sometimes boogas. pls join
                    we are desperate as many of our ooga-ers are leaving and we are left with just booga-ers
                    I don't want to be here anymore with just ooga-ers I fear for the life of my child
		        </div>
		        <img id="PictureHolder" src={require('./Constants/images/sample.png')} />

		        <img id="PeepsLeft" src={require('./Constants/images/Cartoons/smallpeeps left.png')} />
		        <img id="PeepsRight" src={require('./Constants/images/Cartoons/smallpeeps right.png')} />

		</div>
	)

}


export default TextSection;
