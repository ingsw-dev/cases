import React from "react";
import { Div, Span } from "glamorous";

export const Block = ({ children, ...rest }) => (
  <Span display="block" {...rest}>
    {children}
  </Span>
);

export const Inline = ({ children, ...rest }) => (
  <Span display="inline" {...rest}>
    {children}
  </Span>
);

export const Row = ({ children, ...rest }) => (
  <Div display="flex" flexDirection="row" {...rest}>
    {children}
  </Div>
);

export const Col = ({ children, ...rest }) => (
  <Div display="flex" flexDirection="column" {...rest}>
    {children}
  </Div>
);
