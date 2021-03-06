import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Theme from "./src/theme/theme";
import "./src/css/style.css";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={Theme}>{element}</ThemeProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.object.isRequired,
};
