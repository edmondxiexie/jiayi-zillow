import React, { Component } from "react";
import PhotoGallery from "../common/PhotoGallery";
import avatar from "../../../img/avatar.png";
import photo from "../../../img/photo.jpg";
import photo2 from "../../../img/photo2.jpeg";
import hodor from "../../../img/hodor.gif";

import small from "../../../img/small_svg.svg";
import big from "../../../img/big_svg.svg";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = [
      {
        id: 1,
        url:
          "http://res.cloudinary.com/dqace5qmb/image/upload/v1522112935/8965577171_719591ff4d_z.jpg",
        caption: "Grand and Cozy 1920's SF Studio"
      },
      {
        id: 2,
        url:
          "http://res.cloudinary.com/dqace5qmb/image/upload/v1522112935/14823475947_9e7c2b9718_z.jpg",
        caption: "Charming SF 1911 Studio"
      },
      {
        id: 3,
        url:
          "http://res.cloudinary.com/dqace5qmb/image/upload/v1522112934/34601928261_e80211d848_z.jpg",
        caption: "Garden Retreat steps from Haight St"
      },
      {
        id: 4,
        url:
          "http://res.cloudinary.com/dqace5qmb/image/upload/v1522112934/7591470070_59dccc57a3_z.jpg",
        caption: "Room with Beautiful Furnishings"
      },
      {
        id: 5,
        url:
          "https://res.cloudinary.com/dqace5qmb/image/upload/v1523844841/a9ac997d-f870-4e37-a1ca-28e77def4721.jpg",
        caption: "The Artist's Experience"
      },
      {
        id: 6,
        url:
          "http://res.cloudinary.com/dqace5qmb/image/upload/v1523846441/54d27a1f-956f-4211-a790-b34ac2c314d0.jpg",
        caption: "Central & lovely full apartment"
      },
      {
        id: 7,
        url:
          "http://res.cloudinary.com/dqace5qmb/image/upload/v1523846441/25bcf8d4-449f-4786-8a9a-5d1ed63fae8e.jpg",
        caption: "1BR in the heart of Shanghai downtown"
      },
      {
        id: 8,
        url:
          "https://res.cloudinary.com/dqace5qmb/image/upload/v1524280655/un5rgxwnlplqw6naulmx.jpg",
        caption: "Upscale Private Ensuite Bed & Bath"
      },
      {
        id: 9,
        url:
          "http://res.cloudinary.com/dqace5qmb/image/upload/v1523846442/8455a6b9-ae9d-41fc-beda-ddbffbc99a1f.jpg",
        caption: "Sleek condo in heart of NY"
      }
    ];

    return (
      <div className="container">
        <div className="homepage-base">
          <h1>This is home page.</h1>
          <PhotoGallery images={images} />
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
          <div>
            <h3>Small svg file</h3>
            <img src={small} className="img-base" />
          </div>
          <div>
            <h3>Big svg file</h3>
            <img src={big} className="img-base" />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
