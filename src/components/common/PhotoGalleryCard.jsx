import React, { Component } from "react";
import PropTypes from "prop-types";

class PhotoGalleryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url, caption, onClickNext, onClickPrev, sliding } = this.props;

    return (
      <div className="photo-gallery-card-base">
        <div className="photo-gallery-card">
          <div className="card-caption">
            <div>{caption}</div>
          </div>
          <div
            className="next-area"
            onClick={e => {
              onClickNext(e);
            }}
          >
            <div className={`text${sliding ? " hide" : ""}`}>
              <span
                className="glyphicon glyphicon-menu-right"
                aria-hidden="true"
              />
            </div>
          </div>
          <div
            className="prev-area"
            onClick={e => {
              onClickPrev(e);
            }}
          >
            <div className={`text${sliding ? " hide" : ""}`}>
              <span
                className="glyphicon glyphicon-menu-left"
                aria-hidden="true"
              />
            </div>
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
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired
};

export default PhotoGalleryCard;
