import React from 'react';
import Banner from './Banner';
import Best_deliver_product from '../Best_Deliver_product/Best_deliver_product';
import DeliveryBanner from './DeliveryBanner';
import Serve from '../Serve/Serve';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Best_deliver_product></Best_deliver_product>
            <DeliveryBanner></DeliveryBanner>
            <Serve></Serve>
        </div>
    );
};

export default Home;