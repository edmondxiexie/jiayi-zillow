import React, { Component } from "react";
import avatar from "../../../img/avatar.png";
import photo from "../../../img/photo.jpg";
import photo2 from "../../../img/photo2.jpeg";
import hodor from "../../../img/hodor.gif";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-base">
        <h1>This is home page.</h1>
        <div>
          <h3>png file</h3>
          <img src={avatar} className="img-base" />
        </div>
        <div>
          <h3>jpg file</h3>
          <img src={photo} className="img-base" />
        </div>
        <div>
          <h3>jpeg file</h3>
          <img src={photo2} className="img-base" />
        </div>
        <div>
          <h3>gif file</h3>
          <img src={hodor} className="img-base" />
        </div>
      </div>
      );
  }
}

export default Homepage;