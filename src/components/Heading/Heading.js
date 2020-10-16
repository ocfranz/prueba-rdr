import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Heading = ({ children }) => {
  return (
    <div className="heading">
      <h1>{children}</h1>
    </div>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
