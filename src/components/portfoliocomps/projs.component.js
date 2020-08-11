import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../style.css'
import nba from '../../images/nba.jpg'
import ml from '../../images/ml.png'
import brain from '../../images/brain.jpg'
import embd from '../../images/embd.png'
import hwaccel from '../../images/hwaccel.PNG'


export default class Project extends Component {


  constructor(props) {
  super(props);
  this.state = {project: 'null'
  };
}


  render(){
    console.log(this.state.flg);

    return(
      <div>
      {(this.props.project !== 'null' ) &&

          <div className="jumbotron jumbotron-fluid bg-primary rounded">
            <div className="container">
              {this.props.project === "NBA Data Analysis" && <img src={nba} className="rounded float-right" style={{marginRight: 100}} alt={this.props.project} />}
              {this.props.project === "Brainwave Detection" && <img src={brain} className="rounded float-right" alt={this.props.project} />}
              {this.props.project === "Embedded Systems" && <img src={embd} className="rounded float-right"style={{positionRight: 100}} alt={this.props.project} />}
              {this.props.project === "Hardware Acceleration" && <img src={hwaccel} className="rounded float-right" alt={this.props.project} />}
              {this.props.project === "Machine Learning Object Detection" && <img src={ml} className="rounded float-right" alt={this.props.project} />}




              <h1 className="display-4">{this.props.project}</h1>

              {this.props.project === "NBA Data Analysis" && <div className="lead text-light"><p>Analyzing data sets provided by NBA.com (through NBA-API) as well as advanced statistics provided by 538, to track
              and compare player performance.</p>
              <p> Via Python, relevant data-sets are extracted from JSON tables and then added to a separate database using SQLite3;
              requires knowledge of libraries such as Pandas, numpy, matplotlib, etc.</p>
              <p>Jupyter Notebook is used to create documents showcasing statistical trends and correlation between database entries.</p></div>}

              {this.props.project === "Brainwave Detection" && <div className="lead text-light"><p>Designed and created entire analog circuit for measuring brainwaves, and illustrating to user activity of brain. Requied filter, amplifier, and IR transmitter circuit design</p>
              <p> Circuit was made into PCB using Autodesk's EAGLE software. Component's were soldered to top and bottom of PCB, surface mount components needed for Amplifier.</p>
              <p>Project management skills and tools heavily employed (design-build-test cycles, gantt charts, project flowcharts) due to available working period of only 7 weeks. </p></div>}


              {this.props.project === "Embedded Systems" && <div className="lead text-light"><p>Designed rock paper scissors game, using a real glove (worn by the player) fitted with flex sensors, accelerometer, and
              a supporting comparator circuit to detect player selection; all controlled by TI MSP432 micro-controller.</p>
              <p> Sensor drivers (I2C and SPI),and main logic written in C; game outcome transmitted to computer via UART with
              graphics shown in terminal window using the VT100 protocol.</p>
              <p>Required the creation of project management tool such as Gantt charts, design/build/test iterations and work flow
              diagrams; also created users manual written in technical engineering format'</p></div>}



              {this.props.project === "Hardware Acceleration" && <div> <p className="lead text-light">Used Zynq SOC and the Vivado Block Design to integrate custom IP with the on board ARM controller; required use
              and knowledge AXI-Lite and AXI-Stream protocols to allow the processor to read and write from user created peripherals. </p>
              <p className="lead text-light"> Created custom peripherals using Vivado HLS and design suite to package IP within the proper protocol interfaces. </p>
              <p className="lead text-light"> Utilized standard benchmarks for comparing efficacy of hardware acceleration versus strictly executions of relevant
              and commonly used applications.</p> </div>}


              {this.props.project === "Machine Learning Object Detection" && <div> <p className="lead text-light">Utilized TensorFlow and OpenCV to train and evaluate CNN object detection models using YOLO network framework.
              Used COCO as well as custom data-sets to test networks. </p>
              <p className="lead text-light"> Implemented trained models onto Speed Maix Development board (RiscV Architecture) to create a mobile object
              detection unit, using micro python. </p>
              <p className="lead text-light"> Currently learning CUDA to create custom neural network architecture, allowing for smaller network size to improve
              mobile performance.</p> </div>}




            </div>
          </div>

      }

      </div>







    );
  }

}
