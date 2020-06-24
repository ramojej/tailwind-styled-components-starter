import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./src/theme/theme";
import "./src/css/style.css";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={Theme}>{element}</ThemeProvider>;
};
