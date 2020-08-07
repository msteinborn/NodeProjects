import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../style.css'
import { CSSTransition } from 'react-transition-group'; // ES6
import PortfolioItem from './portfoliocomps/portitem.component.js'


export default class Portfolios extends Component {
  constructor(props) {
  super(props);
    this.state = {isToggle: false};
    this.handleClick = this.handleClick.bind(this); }


  handleClick() {
    this.setState( state =>({
      isToggle: !state.isToggle
    }));
    console.log(this.state.isToggle)
  }
  render(){

  return (
      <section class="site-section bg-primary" id="section-portfolio">
      <div class="container">
        <div class="row">
          <div class="section-heading text-center col-md-12">
            <h2 class="mx-auto text-light">Some Projects</h2>
          </div>
        </div>
        <div class="filters">
          <ul>
            <li class="active" data-filter="*">All</li>
            <li class = "nav" data-filter=".hardware" onClick = {this.handleClick}>Hardware</li>
            <li class = "nav" data-filter=".software">Software</li>
          </ul>
        </div>

        </div>

        {this.state.isToggle && <PortfolioItem title="Embedded Project" /> }
      </section>

    );
    }
    }
