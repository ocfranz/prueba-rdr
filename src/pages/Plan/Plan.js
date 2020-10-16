import React from "react";
import data from "../../lib/data.json";
import "./styles.scss";

import Layout from "../../components/Layout";
import Header from "../../modules/Header";
import Heading from "../../components/Heading";
import PlanCard from "../../components/PlanCard";

const Plan = (props) => {
  return (
    <Layout>
      <>
        <Header children="Membresías" />
        <Heading children="Cronograma" />
        <div className="plan-list">
          {data.objModel.map((item, index) => (
            <PlanCard item={item} key={`plan-card-${index}`} />
          ))}
        </div>
      </>
    </Layout>
  );
};

export default Plan;
