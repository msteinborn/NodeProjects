import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/_custom_theme.scss"

import Photos from "./components/photos.component";
import Jumbo from "./components/jumbo.component";
import About from "./components/about.component";
import Portfolios from "./components/portfolio.component";
import './style.css'





class App extends Component {
  render(){
  return (
    <Router>
      <div id="colorlib-page">
          <div id="container-fluid">
      		<div id="colorlib-main" class ='bg-light'>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary sticky-top vh" style={{height: 80}}>
              <Link to="/" class="navbar-brand" href="#"><h2 class="font-weight-bold" >Matt</h2></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse t  justify-content-end" style={{marginRight: 100}} id="navbarNav">
                <ul class="navbar-nav">
                  <li class="navbar-item">
                    <Link to="/" class="nav-link "><h5><strong>Home</strong></h5> </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/portfolio" className="nav-link"><h5><strong>Portfolio</strong></h5></Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/photos" className="nav-link"><h5><strong>Photos</strong></h5></Link>
                  </li>
                  <li class="nav-item">
                  </li>
                </ul>
              </div>
            </nav>
            </div>
        </div>




        <Route  path="/photos" exact component={Photos} />
        <Route  path = "/" exact component={() => <Jumbo name={`Matt`} />} />
        <Route  path = "/portfolio" exact component={Portfolios} />

      </div>

    </Router>
  );
}
}

export default App;
