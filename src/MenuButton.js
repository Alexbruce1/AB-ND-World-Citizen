import React, { Component } from "react";

export default class MenuButton extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="menu-button">
        <img
          alt="menu-button-icon"
          className="menu-button-icon"
          id={this.props.purpose}
          src={this.props.icon}
        />
      </div>
    );
  }
}
