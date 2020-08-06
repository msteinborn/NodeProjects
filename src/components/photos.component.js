import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import storefront from '../images/Shop2(edit).jpg'
import '../style.css'



export default class Photos extends Component {
  constructor(props){
    super(props);
    this.state = {width: '1280'}
  }

  componentDidMount(){
    this.setState({
      width: (window.innerWidth) - (0.1)*(window.innerWidth)
    })
  }

  render(){
  var pic = require('../images/Shop2(edit).jpg')
  return (
    <section class="site-hero" style={{ backgroundImage: `url(${storefront})`}}>
		<div class="container">
			<div class="row intro-text align-items-center justify-content-center">
				<div class="col-md-10 text-center pt-5">

					<h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Matthew  Steinborn</strong></h1>
					<strong class="d-block text-white text-uppercase letter-spacing">and this is My Resume</strong>
				</div>
			</div>
		</div>
  </section>
  );
  }
  }
