import React, { Component } from "react";
import PhotoGalleryCard from "./PhotoGalleryCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "react-bootstrap";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images.slice()
    };
  }

  handleRemoveImage(id) {
    const { images } = this.state;
    this.setState({
      images: images.filter(image => image.id !== id)
    });
  }

  handleRecoverImages() {
    this.setState({
      images: this.props.images.slice()
    });
  }

  buildGallery(images) {
    const gallery = [];
    for (let image of images) {
      let { id, url, caption } = image;

      gallery.push(
        <CSSTransition key={url} timeout={500} classNames="fade">
          <div className="col-md-4">
            <PhotoGalleryCard
              url={url}
              caption={caption}
              onDeleteImage={() => {
                this.handleRemoveImage(id);
              }}
            />
          </div>
        </CSSTransition>
      );
    }
    return gallery;
  }

  render() {
    const { images } = this.state;

    return (
      <div className="photo-gallery-base">
        <Button
          bsStyle="primary"
          onClick={() => {
            this.handleRecoverImages();
          }}
        >
          Recover all images
        </Button>
        <div className="row">
          <TransitionGroup>{this.buildGallery(images)}</TransitionGroup>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
