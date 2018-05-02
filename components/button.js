import React from "react";
import { Button as Base } from "glamorous";

export const Button = ({ children, ...props }) => (
  <Base border="none" outline="none" {...props}>
    {children}
  </Base>
);
