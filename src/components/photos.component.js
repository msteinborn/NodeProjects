import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import storefront from '../images/Shop2.jpg'
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
  return (
    <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
    <section class="site-hero" style={{ backgroundImage: `url(${storefront})`}} data-stellar-background-ratio="0.5">
		  <div class="container">
			   <div class="row intro-text align-items-flex-start justify-content-center" style={{ marginTop: "100px"}}>
				     <div class="col-md-10 text-left pt-10">
					        <h1 class="site-heading site-animate">Enjoy Some <strong class="d-block">Photography</strong> </h1>
				     </div>
			   </div>
	    </div>
    </section>




    </body>



  );
  }
  }
