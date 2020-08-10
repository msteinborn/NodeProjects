import React, {Component} from 'react';

import ResItem from './resumecomps/resitem.component'


export default class Resume extends Component {


  constructor(props) {
  super(props);
}

  render(){
    return(


      <section class="site-section bg-green " id="section-resume">

  		<div class="container bg-green">
  			<div class="row">
  				<div class="col-md-12 mb-5">

          	<div class="section-heading text-center">
  						<h2>My <strong className= "">Resume</strong></h2>
  					</div>

            <div class="col-md-6">
              <h2 class="mb-5">Education</h2>
            </div>


  				  <ResItem
            title = 'Bossman' text = 'JR Position' dates = 'December 96 - Feburary 2020' location = 'Tampa, FL'

            ></ResItem>



  				<div class="col-md-6">
          	<h2 class="mb-5">Experience</h2>
            </div>
  			</div>
        </div>
        </div>

  	</section>







    );
  }

}
