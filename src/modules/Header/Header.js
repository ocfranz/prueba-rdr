import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Header = ({ children }) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <a href="/"> membresías</a>
        <a href="/plan"> cronograma</a>
      </div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Header;
