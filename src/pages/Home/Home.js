import React, { useState, useEffect } from "react";
import subscriptions from "../../lib/suscription.json";

import "./styles.scss";
import MembershipCard from "../../components/MembershipCard";
import Layout from "../../components/Layout";
import Header from "../../modules/Header";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

const Home = (props) => {
  const [priceConfig, setPriceConfig] = useState("yearly");
  const cleanUpData = () => {
    const { objModel } = subscriptions;
    const newData = [];
    objModel.map((item) => {
      let isAdded = false;
      newData.map((t) => {
        if (t.package.name === item.package.name) {
          isAdded = true;
        }
      });
      if (!isAdded) {
        newData.push(item);
      }
    });
    return newData;
  };
  useEffect(() => {
    cleanUpData();
  }, []);

  const handleConfigChange = (type) => {
    setPriceConfig(type);
  };
  return (
    <Layout>
      <>
        <Header children="Membresías" />
        <Heading children="Nuestras membresías" />
        <div className="membership-control">
          <Button
            children="mensual"
            handleOnClick={() => handleConfigChange("monthly")}
            outline={priceConfig !== "monthly"}
          />
          <Button
            children="Anual"
            handleOnClick={() => handleConfigChange("yearly")}
            outline={priceConfig !== "yearly"}
          />
        </div>
        <div className="membership-list">
          {cleanUpData().map((item, index) => {
            return (
              <MembershipCard
                key={`membership-${index}`}
                item={item}
                showYearly={priceConfig === "yearly"}
              />
            );
          })}
        </div>
      </>
    </Layout>
  );
};

export default Home;
