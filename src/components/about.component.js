import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Button from '@material-ui/core/button';
import Box from '@material-ui/core/Box';
import "bootstrap/dist/css/bootstrap.min.css";

export default class About extends Component {
  render(){
  return (
			<div class="row intro-text align-items-center justify-content-center">
				<div class="col-md-10 text-center pt-5">

					<h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Charles Anderson</strong></h1>
					<strong class="d-block text-white text-uppercase letter-spacing">and this is My Rezume</strong>

				</div>
			</div>
    );
  }
}
