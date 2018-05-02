import React, { Fragment, Component } from "react";
import Link from "next/link";
import glamorous, { A, Img, Ul, Li } from "glamorous";
import { Col, Row, Inline, Block } from "./containers";
import { Button } from "./button";
import { Icon } from "./icon";

const NavigationContainer = glamorous(Row)({
  justifyContent: "space-between",
  height: "4.7rem",
  alignItems: "center",
  padding: "0 1.125rem",
  transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  "@media all and (orientation: landscape)": {
    height: 0
  }
});

const MenuList = glamorous(Col)(
  {
    position: "fixed",
    right: 0,
    top: 0,
    background: "rgba(255, 126, 50, 0.9)",
    transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    borderRadius: "50%"
  },
  ({ open }) => ({
    opacity: open ? 1 : 0,
    zIndex: open ? 1 : -1,
    height: open ? "150vh" : "0%",
    width: open ? "150vh" : "0%",
    transform: open ? "translateX(50%) translateY(-50%)" : "translateX(100%) translateY(-100%)"
  })
);

const MenuButton = glamorous(Button)({
  cursor: "pointer",
  zIndex: 2,
  position: "relative",
  background: "transparent"
});

export const Navigation = ({ children }) => (
  <NavigationContainer>
    <Logo />
    <Menu>{children}</Menu>
  </NavigationContainer>
);

export const Item = ({ href, children, icon }) => (
  <Col>
    <Icon type={icon} />
    <Link href={href}>
      <A>{children}</A>
    </Link>
  </Col>
);

class Menu extends Component {
  state = { open: false };
  toggle = () => this.setState({ open: !this.state.open });
  render() {
    return (
      <Block>
        <MenuButton onClick={this.toggle}>
          <Icon type="hamburger" fontSize="2rem" />
        </MenuButton>
        <MenuList open={this.state.open}>{this.props.children}</MenuList>
      </Block>
    );
  }
}

const Logo = () => (
  <Inline>
    <Img src="/static/images/logo-white.svg" alt="Ingenious Agency logo" />
  </Inline>
);
