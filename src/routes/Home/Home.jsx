import React from "react";
import Banner from "../../Components/Banner";
import Best_deliver_product from "../../Components/Best_deliver_product";
import DeliveryBanner from "../../Components/DeliveryBanner";
import Serve from "../../Components/Serve";
import Discount_banner from "../../Components/Discount_banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Cravey | Home</title>
      </Helmet>
      <Banner></Banner>
      <Best_deliver_product></Best_deliver_product>
      <DeliveryBanner></DeliveryBanner>
      <Serve></Serve>
      <Discount_banner></Discount_banner>
    </div>
  );
};

export default Home;
