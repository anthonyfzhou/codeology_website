import React from 'react';
import { Parallax, Background } from 'react-parallax';


function WallImage(props) {
    return (
        <div id="wallBack">
           <Parallax
                    bgImage={require('./Constants/Wall.png')}
                    bgImageStyle={{width:"1800px", height: '1000px', opacity: "70%"}}
                    strength={100}
            >
                <div className="textOverlay-white"> our community</div>
                {/* Determines Parallax Height */}
                <div style={{ height: '82vh' }} />
            </Parallax>
        </div>
    )
}

export default WallImage;