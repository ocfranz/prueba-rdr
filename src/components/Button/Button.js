import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ children, handleOnClick, outline }) => {
  return (
    <button
      className={`simple-button simple-button--${
        outline ? "outline" : "default"
      }`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  handleOnClick: PropTypes.func,
  outline: PropTypes.bool,
};

export default Button;
