import React, { Component } from "react";
import glamorous, { Iframe } from "glamorous";
import { Block } from "./containers";
import { Title } from "./title";
import { Icon } from "./icon";

const Container = glamorous(Block)(
  {
    background: "#121010",
    position: "relative",
    overflow: "hidden",
    border: "2px solid #666",
    height: "calc(50vh - 5rem)",
    "@media all and (orientation: landscape)": {
      height: "100vh"
    },
    "::after": {
      content: " ",
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: "rgba(18, 16, 16, 0)",
      opacity: 0,
      zIndex: 2,
      pointerEvents: "none"
    },
    "::before": {
      content: " ",
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background:
        "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
      zIndex: 2,
      backgroundSize: "100% 2px, 3px 100%",
      pointerEvents: "none"
    }
  },
  ({ playing }) => ({
    "::after": {
      display: playing ? "none" : "block"
    },
    "::before": {
      display: playing ? "none" : "block"
    }
  })
);

const Screen = glamorous(Block)(
  {
    background: "url(http://ingenious.agency/static/images/home/d-gabo.jpg) no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    animationFillMode: "forwards"
  },
  ({ stopping, playing }) => ({
    animation: stopping ? "turn-off 0.55s cubic-bezier(0.23, 1, 0.32, 1)" : "turn-on 4s linear",
    background: playing
      ? "none"
      : "url(http://ingenious.agency/static/images/home/d-gabo.jpg) no-repeat"
  })
);

const Videos = glamorous(Block)({
  height: "50vh",
  overflow: "auto",
  "@media all and (orientation: landscape)": {
    display: "none"
  }
});

const Rotate = () => (
  <Icon
    type="exclamation-single"
    position="absolute"
    fontSize="16rem"
    opacity=".5"
    zIndex={3}
    left="calc(50% - 8rem)"
    top="50%"
    animation="bounce 3s infinite cubic-bezier(0.23, 1, 0.32, 1)"
  />
);

export class Player extends Component {
  state = {
    stopping: false,
    video: null,
    landscape: false
  };

  isPlaying = () => !!this.state.video;

  isLandscape = () => this.state.landscape;

  isStopping = () => this.state.stopping;

  changeChannel = video => {
    const oldVideo = this.state.video;

    this.setState({ stopping: true, video: null });

    setTimeout(() => {
      const videoValue = video === oldVideo ? null : video;
      this.setState({ stopping: false, video: videoValue });
    }, 500);
  };

  componentDidMount() {
    if (window) {
      window.addEventListener(
        "orientationchange",
        () => {
          this.setState({ landscape: !window.matchMedia("(orientation: landscape)").matches });
        },
        false
      );
      this.setState({ landscape: window.matchMedia("(orientation: landscape)").matches });
    }
  }

  render() {
    return (
      <Block>
        {this.isPlaying() && !this.isLandscape() && <Rotate />}
        <Container playing={this.isPlaying()}>
          <Screen stopping={this.isStopping()} playing={this.isPlaying()}>
            {this.state.video ? (
              <Iframe src={this.state.video} width="100%" height="100%" allowFullScreen />
            ) : (
              <Title position="absolute" top="5.125rem" left="3.125rem">
                {this.props.title}
              </Title>
            )}
          </Screen>
        </Container>
        <Videos>
          {React.Children.map(this.props.children, (child, key) => {
            return React.cloneElement(child, {
              key,
              onPlay: this.changeChannel,
              playing: child.props.video === this.state.video
            });
          })}
        </Videos>
      </Block>
    );
  }
}
