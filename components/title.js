import React from "react";
import glamorous from "glamorous";

export const Title = ({ component = "h1", children, ...props }) => {
  const Component = glamorous(component)({
    fontFamily: "FuseV2Display-ExtraBold",
    color: "rgb(244, 245, 245)",
    fontSize: "3.5rem",
    ...props
  });
  return <Component>{children}</Component>;
};
