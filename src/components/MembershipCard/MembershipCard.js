import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";
import Button from "../Button";
import PriceItem from "../PriceItem";

const MembershipCard = ({ item, showYearly }) => {
  return (
    <div className="membership-card">
      <div className="membership-card__wrapper">
        <h3 className="membership-card__title">{item.package.name}</h3>
        <PriceItem price={item.package.quoteprice} />
        <p className="membership-card__description">
          USD / Mensuales / {`${item.package.description}`}
        </p>
        <p className="membership-card__price-yearly">
          {showYearly ? `$${item.package.price} total anual` : "--"}
        </p>
        <Button children="comprar ahora" handleOnClick={() => {}} />
        <a href="/plan">ver cronograma</a>
      </div>
    </div>
  );
};
MembershipCard.defaultProps = {
  showYearly: true,
};

MembershipCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    package: PropTypes.shape({
      description: PropTypes.string,
      duration: PropTypes.string,
      id: PropTypes.number,
      idFamilyPackage: PropTypes.number,
      initialPrice: PropTypes.number,
      initialpriceletter: PropTypes.string,
      name: PropTypes.string,
      nameFamilyPackage: PropTypes.string,
      price: PropTypes.number,
      pricetotalletter: PropTypes.string,
      quoteletter: PropTypes.string,
      quoteprice: PropTypes.number,
      quotes: PropTypes.number,
      volume: PropTypes.number,
    }),
  }).isRequired,
  showYearly: PropTypes.bool,
};

export default MembershipCard;
