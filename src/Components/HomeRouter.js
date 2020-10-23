import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


import HomePage from './Home/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs/AboutUs.js';
import Projects from './Projects/Projects.jsx';

import './Home/assets/stylesheet/Navbar.css';
import './AboutUs/css/Footer.css';
import './Home/assets/stylesheet/home.css';
import Footer from './Home/Footer.js';

function HomeRouter() {
  return (
        <HashRouter basename='/'>
            <div>
                {/* Nav bar   */}
                <div className="topnav">
                    <a href="index.html" id="nav-logo">
                        <img id="logo" src={require("./Home/assets/images/logo.png")} />
                        <div id="name"><strong></strong></div>
                    </a>

                    <div id="nav-items">
                        <Link className="not-apply" to="/">Home</Link>
                        <Link className="not-apply" to="/about">About Us</Link>
                        <Link className="not-apply" to="/projects">Projects</Link>

                        <a href="" className="apply button">APPLY</a>
                    </div>
                </div>

                {/* Everything in Switch handles routing */}
                <Switch>
                  <Route path="/about">
                    <AboutUs />
                  </Route>

                  <Route path="/projects">
                    <Projects />
                  </Route>

                  <Route path="/">
                    <HomePage />
                  </Route>

                </Switch>

                <Footer />


            </div>
        </HashRouter>
  );
}

export default HomeRouter;
