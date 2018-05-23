import React, { Component } from "react";
import PropTypes from "prop-types";

class PhotoGalleryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, caption, onDeleteImage } = this.props;

    return (
      <div
        className="photo-gallery-card-base"
        onClick={e => {
          onDeleteImage(e);
        }}
      >
        <div className="photo-gallery-card">
          <div className="card-caption">
            <div>{caption}</div>
          </div>
          <img src={url} className="card-img" />
        </div>
      </div>
    );
  }
}

PhotoGalleryCard.propTypes = {
  url: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onDeleteImage: PropTypes.func.isRequired
};

export default PhotoGalleryCard;
