import React, {Component} from 'react';
import os from "os"
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
  						<h2> <strong className= "">Resume</strong></h2>
  					</div>

            <div class="col-md-6">
              <h2 class="mb-5">Education</h2>
            </div>


  				  <ResItem
            title = 'B.S. Electrical Engineering (Computer Engineering Focus)'
            text = 'California Polytechnic University'
            dates = 'October 2014 - October 2019'
            location = 'San Luis Obispo, CA'

            ></ResItem>



  				<div class="col-md-6">
          	<h2 class="mb-5">Experience</h2>
            </div>


            <ResItem
            title = 'R&D Intern, Universal Creative'
            text = 	'Used embedded systems and electronic knowledge to integrate both self-made and vendor created devices for the purpose of demonstrating innovative applications of new technologies to managers and executives.	Worked on a team of various engineering and design disciplines to create demonstrations and blue-sky projects for the research and development team. 	Met with vendors to discuss what aspects of their products need to be improved, as well as properly discern potential use cases for their designs'


            dates = 'September 2018 - January 2019'
            location = 'Orlando, FL'

            ></ResItem>
            <ResItem
            title = 'Intern, Advantage Engineering'
            text = 	'	Met with and spoke with contractors to understand their expectations, and present work that had been completed.	Quickly learned and applied skills outside of discipline such calculating weir data,Civil 3D, and comparison of field measurements to Government provided data sets
'


            dates = 'May 2014 - June 2014'
            location = 'Tampa, FL'

            ></ResItem>

            <div class="col-md-6">
              <h2 class="mb-5">Skills</h2>
              </div>

              <ResItem
              title = 'Programming/Scripting Languages'
              text = 	'Python, C, C++, Matlab, SQL, Javascript (Node.js), VHDL'

              ></ResItem>

              <ResItem
              title = 'Hardware'
              text = 	{'ARM, AVR, TI MSP, Artix-7 FPGA, RISCV, Zynq SOC, Raspberry Pi, Surface Mount Soldering.'+ "\r\n Also experienced with the following hardware protocols: I2C, SPI, UART, AXI-4"}
              ></ResItem>


              <ResItem
              title = 'Software'
              text = 	'LTSpice, SolidWorks, EAGLE, LabVIEW, Vivado Design Suite, Microsoft Office Suite, Linux'

              ></ResItem>
  			</div>
        </div>
        </div>

  	</section>







    );
  }

}
