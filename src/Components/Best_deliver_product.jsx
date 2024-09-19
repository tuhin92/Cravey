import React from "react";
import { ArrowRight } from "lucide-react";

const BestDeliveredCategories = () => {
  const categories = [
    { name: "Soft Beverage", image: "https://i.ibb.co/fqCpmn3/1-removebg-preview.png" },
    { name: "Fruits Juice", image: "https://i.ibb.co/mDdp7NT/3-removebg-preview.png" },
    { name: "French Fries", image: "https://i.ibb.co/NWKWqYk/2-removebg-preview.png" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 style={{ fontFamily: "Josefin Sans, sans-serif" }} className="text-2xl md:text-4xl font-extrabold text-center text-[#3d3c3c] mb-12">
          Best <span className="text-blue-500">Delivered</span> Categories
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="p-6">
                <div className="mb-6 h-48 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h2 className="font-bold text-xl text-gray-800 mb-4">{category.name}</h2>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition duration-300"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeliveredCategories;
