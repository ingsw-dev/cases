import React from "react";
import { Block } from "../components/containers";
import { Navigation, Item } from "../components/navigation";
import { Player } from "../components/player";
import { Case } from "../components/case";

export default () => (
  <Block>
    <Navigation>
      <Item href="http://ingenious.agency">Ingenious website</Item>
    </Navigation>
    <Player title="Ingenious Cases">
      <Case
        hero="http://ingenious.agency/static/images/projects/cronopedia-thumb.png"
        video="https://player.vimeo.com/video/246984738?title=0&amp;byline=0&amp;portrait=0&autoplay=1"
      />
      <Case
        hero="http://ingenious.agency/static/images/projects/cronopedia-thumb.png"
        video="https://player.vimeo.com/video/246964283?title=0&amp;byline=0&amp;portrait=0&autoplay=1"
      />
      <Case
        hero="http://ingenious.agency/static/images/projects/cronopedia-thumb.png"
        video="https://player.vimeo.com/video/246977595?title=0&amp;byline=0&amp;portrait=0&autoplay=1"
      />
      <Case
        hero="http://ingenious.agency/static/images/projects/cronopedia-thumb.png"
        video="https://player.vimeo.com/video/246981025?title=0&amp;byline=0&amp;portrait=0&autoplay=1"
      />
    </Player>
  </Block>
);
