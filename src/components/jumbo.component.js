import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export default class Jumbo extends Component {
  render(){
  return (
    <div class="jumbotron">
      <h1 class="display-4 text-dark">Hello, world!</h1>
      <p class="lead text-dark">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  );
  }
}
