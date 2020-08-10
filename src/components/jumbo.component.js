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
    let width =window.innerWidth;
    let height = window.innerHeight;
  return (
    <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
      <section className="site-hero" style={{ backgroundImage: `url(${matt})`}}  data-stellar-background-ratio="0.5">
		    <div className="container" style= {{marginRight: width*.3 , marginTop: height*.02}}>
			     <div className="row intro-text align-items-flex-start justify-content-center">
				       <div className="col-md-10 text-left pt-5">
					        <h1 className=" site-animate text-green">Hi, I'm  <strong className="d-block text-green ">{this.props.name}  </strong> </h1>
				              </div>
			      </div>
	       </div>
       </section>





    </body>
  );
  }
}
