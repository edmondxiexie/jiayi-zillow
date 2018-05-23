import React, { Component } from "react";
import PhotoGalleryCard from "./PhotoGalleryCard";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url =
      "https://res.cloudinary.com/dqace5qmb/image/upload/v1524280655/un5rgxwnlplqw6naulmx.jpg";
    const caption = "Example Image";

    return (
      <div className="photo-gallery-base">
        <h1>Photo Gallery</h1>
        <PhotoGalleryCard url={url} caption={caption} />
      </div>
    );
  }
}

export default PhotoGallery;
