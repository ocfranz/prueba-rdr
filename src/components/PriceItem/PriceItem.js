import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const PriceItem = ({ price, unit }) => {
  return (
    <h2 className="price-item price-item--default">
      {unit === "soles" && <sub>s/</sub>}
      {unit === "default" && <sub>$</sub>}
      {price}
    </h2>
  );
};

PriceItem.defaultProps = {
  unit: "default", // dolar as default
};
PriceItem.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
};

export default PriceItem;
