import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../style.css'
import { CSSTransition } from 'react-transition-group'; // ES6



export default class PortfolioItem extends Component {

render(){
  return(

  <div class="filters-content">
    <div class="row grid">
      <div class="single-portfolio col-sm-4 all mockup">
        <div class="relative">
          <div class="thumb">
            <div class="overlay overlay-bg"></div>
          </div>
          <a href="images/p1.jpg" class="img-pop-up">
            <div class="middle">
              <div class="text align-self-center d-flex"></div>
            </div>
          </a>
        </div>
        <div class="p-inner">
          <h4>{this.props.title}</h4>
          <div class="cat">Code</div>
        </div>
      </div>
    </div>
    </div>
);

}
}
