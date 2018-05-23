import React, { Component } from "react";
import PhotoGalleryCard from "./PhotoGalleryCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button, ButtonGroup } from "react-bootstrap";
import ReactSwipe from "react-swipe";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images.slice(),
      sliding: false
    };
  }

  buildGallery(images) {
    const gallery = [];
    for (let image of images) {
      let { id, url, caption } = image;

      gallery.push(
        <div key={id}>
          <PhotoGalleryCard
            url={url}
            caption={caption}
            onClickNext={() => {
              this.next();
            }}
            onClickPrev={() => {
              this.prev();
            }}
            sliding={this.state.sliding}
          />
        </div>
      );
    }
    return gallery;
  }

  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  render() {
    const { images, current } = this.state;

    const swipeOptions = {
      startSlide: 0,
      auto: 0,
      speed: 300,
      disableScroll: false,
      continuous: true,
      callback: () => {
        this.setState({
          sliding: true
        });
        console.log("slide changed");
      },
      transitionEnd: () => {
        this.setState({
          sliding: false
        });
        console.log("ended transition");
      }
    };

    return (
      <div className="photo-gallery-base">
        <ReactSwipe
          ref={reactSwipe => (this.reactSwipe = reactSwipe)}
          className="photo-gallery"
          swipeOptions={swipeOptions}
        >
          {this.buildGallery(images)}
        </ReactSwipe>

        <div className="button-group">
          <ButtonGroup>
            <Button
              bsStyle="primary"
              onClick={() => {
                this.prev();
              }}
            >
              Prev
            </Button>
            <Button
              bsStyle="primary"
              onClick={() => {
                this.next();
              }}
            >
              Next
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
