import React from "react";

const DiscountBanner = () => {
  return (
    <div className="text-black max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group overflow-hidden rounded-2xl">
          <img
            src="https://i.ibb.co/djkGzNv/Dark-Green-Pizza-Photo-Food-Instagram-Post.png"
            alt="Pizza"
            className="w-full h-64 md:h-[500px] object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-2xl md:text-4xl font-bold">Special Discount</h2>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://i.ibb.co/Tkpm3t9/photo-2024-09-17-22-35-10.jpg"
              alt="Food"
              className="w-full h-48 md:h-[240px] object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl md:text-2xl font-bold">Delicious Meals</h2>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://i.ibb.co/30FNrT8/photo-2024-09-17-22-35-42.jpg"
              alt="Food"
              className="w-full h-48 md:h-[240px] object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl md:text-2xl font-bold">Fresh Ingredients</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
