import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../style.css'




export default class PortfolioItem extends Component {

render(){
  return(

  <div className="filters-content">
    <div className="row grid">
      <div className="single-portfolio col-sm-4 all mockup">
        <div className="position-relative">
          <div className="thumb">
            <div className="overlay overlay-bg"></div>
          </div>
            <div className="middle">
              <div className="text align-self-center d-flex"></div>
            </div>
        </div>
        <div className="p-inner">
          <h4>{this.props.title}</h4>
          <div className="cat">Code</div>
        </div>
      </div>
    </div>
    </div>
);

}
}
