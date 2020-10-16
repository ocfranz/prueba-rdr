import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import { formatDate } from "../../helpers/formatDate";
import Icon from "../../components/Icon";
import PriceItem from "../PriceItem";

const PlanCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = (type) => {
    setHovered(type === "enter" ? true : false);
  };
  return (
    <div className="plan-card plan-card--default">
      <div
        className="plan-card__wrapper"
        onMouseEnter={() => handleHover("enter")}
        onMouseLeave={() => handleHover("leave")}
      >
        <div className="plan-card__heading">
          <h3 className="plan-card__quote-name">{item.quoteDescription}</h3>
          <PriceItem unit="soles" price={item.quote.toFixed(2)} />
        </div>
        <div className="plan-card__details">
          <div className="plan-card__balance">
            <div>
              <span className="balance-heading">Amortización</span>
              <span className="balance-value">
                {`${item.amortization.toFixed(2)} `}{" "}
              </span>
            </div>
            <div>
              <span className="balance-heading">Balance</span>
              <span className="balance-value">
                {`${item.capitalBalance.toFixed(2)} `}
              </span>
            </div>
          </div>

          <div className="plan-card__exp-wrapper">
            <Icon
              iconName="calendar"
              color={hovered ? " #ffffff" : "#000000 "}
            />
            <span className="plan-card__exp-date">
              {`${formatDate(item.nextExpiration)}`}
            </span>
          </div>
          <div className="plan-card__exp-wrapper">
            <Icon iconName="clock" color={hovered ? " #ffffff" : "#000000 "} />
            <span className="plan-card__exp-date">
              {`${formatDate(item.nextExpiration, "hours")}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  item: PropTypes.object,
};

export default PlanCard;
