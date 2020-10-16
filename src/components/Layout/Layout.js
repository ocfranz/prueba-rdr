import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Layout = ({ children }) => {
  return <div className="simple-layout">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
