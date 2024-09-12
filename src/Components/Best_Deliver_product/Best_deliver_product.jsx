import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Best_deliver_product = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1
        className="text-2xl md:text-4xl font-extrabold text-center text-[#3d3c3c]"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Best <span className="text-[#0393b7]">Delivered</span> Categories
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-6">
        <div className="text-center">
          <img
            src="https://i.ibb.co.com/fqCpmn3/1-removebg-preview.png"
            alt="Soft Beverage"
            className="w-10/12 h-auto mx-auto transition-transform duration-300 hover:scale-105"
          />
          <div className="text-[#3d3c3c] -mt-4">
            <h2 className="font-bold text-lg">Soft Beverage</h2>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <a
                href="#"
                className="hover:underline text-[#0393b7] font-semibold"
              >
                Order Now
              </a>
              <IoIosArrowForward className="text-[#0393b7] mt-1 text-lg" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <img
            src="https://i.ibb.co.com/mDdp7NT/3-removebg-preview.png"
            alt="Fruits Juice"
            className="w-10/12 h-auto mx-auto transition-transform duration-300 hover:scale-105"
          />
          <div className="text-[#3d3c3c] -mt-2">
            <h2 className="font-bold text-lg">Fruits Juice</h2>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <a
                href="#"
                className="hover:underline text-[#0393b7] font-semibold"
              >
                Order Now
              </a>
              <IoIosArrowForward className="text-[#0393b7] mt-1 text-lg" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <img
            src="https://i.ibb.co.com/NWKWqYk/2-removebg-preview.png"
            alt="French Fries"
            className="w-10/12 h-auto mx-auto transition-transform duration-300 hover:scale-105"
          />
          <div className="text-[#3d3c3c] -mt-4">
            <h2 className="font-bold text-lg">French Fries</h2>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <a
                href="#"
                className="hover:underline text-[#0393b7] font-semibold"
              >
                Order Now
              </a>
              <IoIosArrowForward className="text-[#0393b7] mt-1 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best_deliver_product;
