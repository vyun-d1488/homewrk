import React from "react";
import "./index.css";

const Background = React.lazy(() => import("./background"));
const Text = React.lazy(() => import("./frontText"));

export { Background, Text };
