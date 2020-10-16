import React from "react";
import PropTypes from "prop-types";
import CalendarIcon from "./icons/Calendar";
import ClockIcon from "./icons/Clock";
const Icon = ({ size = 30, color = "#000000", iconName }) => {
  return (
    <>
      {iconName === "calendar" && <CalendarIcon size={size} color={color} />}
      {iconName === "clock" && <ClockIcon size={size} color={color} />}
    </>
  );
};

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  iconName: PropTypes.string.isRequired,
};

export default Icon;
