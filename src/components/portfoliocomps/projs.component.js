import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../style.css'



export default class Project extends Component {


  constructor(props) {
  super(props);
  this.state = {project: 'null'};
}

  render(){
    console.log(this.props.project);
    return(
      <div>
      {(this.props.project !== 'null' ) &&
        <section className = "site-section bg-primary rounded">
          <div className="jumbotron jumbotron-fluid bg-primary">
            <div className="container">
              <h1 className="display-4">{this.props.project}</h1>
              <p className="lead text-light">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
          </div>
          </section>
      }

      </div>







    );
  }

}
