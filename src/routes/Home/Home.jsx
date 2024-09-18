import React from 'react';
import Banner from '../../Components/Banner';
import Best_deliver_product from '../../Components/Best_Deliver_product/Best_deliver_product';
import DeliveryBanner from '../../Components/DeliveryBanner';
import Serve from '../../Components/Serve/Serve';
import Discount_banner from '../../Components/Discount_Banner/Discount_banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Best_deliver_product></Best_deliver_product>
            <DeliveryBanner></DeliveryBanner>
            <Serve></Serve>
            <Discount_banner></Discount_banner>
        </div>
    );
};

export default Home;