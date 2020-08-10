import React, { Component } from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
		    <div className="container" style= {{marginRight: width*.5 , marginTop: height*.1}}>
			     <div className="row intro-text align-items-flex-start justify-content-center">
				       <div className="col-md-10 text-left pt-15">
					        <h1 className=" site-animate text-primary">Hi, I'm </h1> <h1 className=" site-animate text-primary" style= {{ fontWeight: 800}}>   {this.props.name}  </h1>
				              </div>
                         <h1> TESTING </h1>

			      </div>
	       </div>
       </section>


        <div>
          <section className="site-section bg-primary" id="section-portfolio">
          <div className="container">
          <div className = " text-center col-md-12" style={{marginTop:-90}}>
            <MDBContainer>
              <MDBBtn size="lg" tag='a' floating social="li" className="bg-green"  href="https://www.linkedin.com/in/matthewsteinborn/"  target="_blank">
                    <MDBIcon fab icon="linkedin" />
              </MDBBtn>

              <MDBBtn size="lg" tag="a" floating social="git" className="bg-green"  href="https://github.com/msteinborn"  target="_blank">
                <MDBIcon fab icon="github" />
              </MDBBtn>



            </MDBContainer>
          </div>
          </div>
          </section>
        </div>

    </body>
  );
  }
}
