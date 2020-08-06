import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../style.css'


export default class Portfolios extends Component {


  render(){
  return (
      <section class="site-section" id="section-portfolio">
      <div class="container">
        <div class="row">
          <div class="section-heading text-center col-md-12">
            <h2>Featured <strong>Portfolio</strong></h2>
          </div>
        </div>
        <div class="filters">
          <ul>
            <li class="active" data-filter="*">All</li>
            <li data-filter=".packaging">Packaging</li>
            <li data-filter=".mockup">Mockup</li>
            <li data-filter=".typography">Typography</li>
            <li data-filter=".photography">Photography</li>
          </ul>
        </div>

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
                <h4>Square Box Mockup</h4>
                <div class="cat">Mockup</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

    );
    }
    }
