import React from "react";
import { I } from "glamorous";

export const Icon = ({ type, ...props }) => <I className={`icon-${type}`} {...props} />;
