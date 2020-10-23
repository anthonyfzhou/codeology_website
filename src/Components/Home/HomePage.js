import React from 'react';
import './assets/stylesheet/stylesheet.css';
import './assets/stylesheet/home.css';
import './assets/stylesheet/home-mobile.css';

import Carousel from 'react-bootstrap/Carousel';


import Landing from './Landing.js';

export default function HomePage() {
    return (
        <div>

            <Landing />


            <div className="content">

                <div className="big puzzle below">
                    <img src={require("./assets/images/big_puzzle.png")} />
                </div>

                <div className="small puzzle below">
                    <img src={require("./assets/images/small_puzzle.png")} />
                </div>

                <div className="sitting person">
                    <img src={require("./assets/images/sitting_person.png")} />
                </div>

                <div className="big2 puzzle below">
                    <img src={require("./assets/images/big_puzzle2.png")} />
                </div>

                <div className="standing person">
                    <img src={require("./assets/images/standing1.png")} />
                </div>

                <div className="standing2 person">
                    <img src={require("./assets/images/standing2.png")} />
                </div>

                <div id="about" className="section">
                    <div className="text">
                        <h2>Who We Are</h2>
                        <p>Codeology is a UC Berkeley student club focused on self-exploration
                        within the tech industry. By offering hands-on experience through
                        collaborative student projects and professional workshops, we aim to
                        bring the breadth of opportunities and roles within the tech field to
                        Cal students, as well as help our members explore their specific
                        technical and professional interests.</p>
                        <a href="" className="home-button learn">
                            Learn More
                        </a>
                    </div>
                    <img src={require("./assets/images/club.jpg")} />
                </div>

                <div id="project" className="section">

                    <Carousel>
                        <Carousel.Item className="carousel-cell">
                            <img src={require("./assets/images/projects/seawarden.png")} />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-cell">
                            <img src={require("./assets/images/projects/vscodeology.png")} />
                        </Carousel.Item>
                    </Carousel>

                    <div className="text">
                        <h2>Projects</h2>
                        <p>Codeology is a UC Berkeley student club focused on self-exploration within the tech industry. By offering hands-on experience through collaborative student projects and professional workshops, we aim to bring the breadth of opportunities and roles within the tech field to Cal students, as well as help our members explore their specific technical and professional interests.</p>
                        <a href="" className="home-button learn">
                            Learn More
                        </a>
                    </div>
                 </div>

            </div>

        </div>
    )
}

