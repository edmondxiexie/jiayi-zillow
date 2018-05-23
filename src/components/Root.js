import React, { Component } from "react";

class Root extends Component {
  render() {
    return (
      <div className="root">
        <div className="root-container">{this.props.children}</div>
      </div>
      );
  }
}

export default Root;