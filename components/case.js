import React, { Component } from "react";
import { Col, Block } from "./containers";
import { Button } from "./button";
import { Icon } from "./icon";

export class Case extends Component {
  render() {
    const { title, subTitle, hero, onPlay, video, playing } = this.props;
    return (
      <Block margin="1.5rem" position="relative">
        <Block
          background={`url(${hero}) no-repeat 50% rgb(255, 251, 234)`}
          backgroundSize="contain"
          height="10.94rem"
        />

        <Button
          backgroundColor="rgb(255, 126, 50)"
          color="white"
          height="2rem"
          width="2rem"
          fontSize="1rem"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          position="absolute"
          bottom="-1rem"
          right="2rem"
          cursor="pointer"
          onClick={() => onPlay(video)}
        >
          {playing ? <Icon type="pause" /> : <Icon type="play" />}
        </Button>
      </Block>
    );
  }
}
