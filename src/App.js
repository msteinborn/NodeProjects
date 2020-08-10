import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/_custom_theme.scss"

import Photos from "./components/photos.component";
import Jumbo from "./components/jumbo.component";
import Portfolios from "./components/portfolio.component";
import './style.css'





class App extends Component {
  render(){
  return (
    <Router>
      <div id="colorlib-page">
          <div id="container-fluid">
      		<div id="colorlib-main" className ='bg-light'>
            <nav className="navbar navbar-expand-lg navbar navbar-light bg-light sticky-top vh" style={{height: 70}}>
              <Link to="/" className="navbar-brand" href="#"><h2 className="font-weight-bold text-primary pt-25" >Matt Steinborn</h2></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse t  justify-content-end" style={{marginRight: 100}} id="navbarNav">
                <ul className="navbar-nav">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link "><h5><strong className = "text-green">Home</strong></h5> </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/portfolio" className="nav-link"><h5><strong className = "text-green">Portfolio</strong></h5></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/photos" className="nav-link"><h5><strong className = "text-green">Photos</strong></h5></Link>
                  </li>
                  <li className="nav-item">
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
