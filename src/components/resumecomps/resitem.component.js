import React, {Component} from 'react';

export default class ResItem extends Component {



  constructor(props) {
  super(props);
  this.state = {text: '',
                title: '',
                dates:'',
                location:'',
  }
}

  render(){
  return(

      <div className="resume-item mb-4 text-grey bg-primary">
        <span className="date text-grey"><span className="icon-calendar"></span> {this.props.dates}</span>
        <h3 className = "text-grey">{this.props.title}</h3>
        <p className = "text-grey">{this.props.text}</p>
        <span className="school text-grey">{this.props.location}</span>
      </div>

    );
  }
}
