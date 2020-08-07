import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import gradient from '../images/gradient.png'
import matt from '../images/matt.jpg'


export default class Jumbo extends Component {
  constructor(props){
    super(props);
    this.state = {name: 'Matt'}
  }

  render(){
  return (
    <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
    <section class="site-hero" style={{ backgroundImage: `url(${matt})`}}  data-stellar-background-ratio="0.5">
		  <div class="container">
			   <div class="row intro-text align-items-flex-start justify-content-center">
				     <div class="col-md-10 text-left pt-5">
					        <h1 class=" site-animate">Hi, I'm <strong class="d-block text-light ">{this.props.name}</strong> </h1>
				     </div>
			   </div>
	    </div>
    </section>




          <img src={gradient} class="img-fluid fixed-bottom" alt="Responsive image " />
    </body>
  );
  }
}
