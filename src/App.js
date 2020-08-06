import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Photos from "./components/photos.component";
import Jumbo from "./components/jumbo.component";
import About from "./components/about.component";
import Portfolios from "./components/portfolio.component";



class App extends Component {
  render(){
  return (
    <Router>
      <div id="colorlib-page">
          <div id="container">
      		<div id="colorlib-main">
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark sticky-top">
              <Link to="/" class="navbar-brand" href="#">Matt</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="navbar-item">
                    <Link to="/" class="nav-link">Home </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/photos" className="nav-link">Photos</Link>
                  </li>
                  <li class="nav-item">
                  </li>
                </ul>
              </div>
            </nav>
            </div>
        </div>



        <Route  path="/photos" exact component={Photos} />
        <Route  path = "/" exact component={Jumbo} />
        <Route  path = "/portfolio" exact component={Portfolios} />

      </div>
    </Router>
  );
}
}

export default App;
