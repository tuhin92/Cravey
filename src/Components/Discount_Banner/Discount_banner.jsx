import React from "react";

const Discount_banner = () => {
  return (
    <div className="text-black max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src="https://i.ibb.co.com/djkGzNv/Dark-Green-Pizza-Photo-Food-Instagram-Post.png"
          alt=""
          className="w-full h-64 md:h-[500px] rounded-2xl object-cover"
        />

        <div className="grid grid-rows-2 gap-4">
          <img
            src="https://i.ibb.co.com/Tkpm3t9/photo-2024-09-17-22-35-10.jpg"
            alt=""
            className="w-full h-48 md:h-[240px] rounded-2xl object-cover"
          />
          <img
            src="https://i.ibb.co.com/30FNrT8/photo-2024-09-17-22-35-42.jpg"
            alt=""
            className="w-full h-48 md:h-[240px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Discount_banner;
