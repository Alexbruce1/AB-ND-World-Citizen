import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";
import "./slick-theme.css";
import Icon from "./icon";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default class SlickSlider extends Component {
  render() {
    var settings = {
      swipeToSlide: true,
      fade: true,
      infinite: true,
      initialSlide: 0
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <Icon />
          </div>
          <div>
            <Step1 />
          </div>
          <div>
            <Step2 />
          </div>
          <div>
            <Step3 />
          </div>
          <div>
            <Step4 />
          </div>
        </Slider>
      </div>
    );
  }
}