import React, { Component } from "react";
import "./icon.css";
import infoearthglobe from "./Images
import { NavLink } from "react-router-dom";

export default class Miniglobe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        <NavLink to="/Info">
          <img
            id="info-settings-icon"
            alt="what you click on to get to the settings page"
            src={infoImage}
          />
        </NavLink>
      </div>
    );
  }
}
