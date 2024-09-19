import React from 'react';

const CircularImage = ({ src, alt, title, description, arcColors }) => (
  <div className="text-center w-full sm:w-1/2 md:w-1/3 lg:w-auto">
    <div className="relative w-40 h-40 mx-auto">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="white" />
        <path
          d={`M50,2 A48,48 0 0,1 98,50`}
          fill="none"
          stroke={arcColors[0]}
          strokeWidth="4"
        />
        <path
          d={`M98,50 A48,48 0 0,1 50,98`}
          fill="none"
          stroke={arcColors[1]}
          strokeWidth="4"
        />
        <path
          d={`M50,98 A48,48 0 0,1 2,50`}
          fill="none"
          stroke={arcColors[2]}
          strokeWidth="4"
        />
      </svg>
      <div className="absolute inset-2 flex items-center justify-center">
        <img src={src} alt={alt} className="w-32 h-32 object-contain transition-transform duration-300 hover:scale-110" />
      </div>
    </div>
    <div className="text-[#3d3c3c] mt-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="max-w-40 mx-auto text-xs font-semibold">{description}</p>
    </div>
  </div>
);

const HowWeServeYou = () => {
  const services = [
    {
      src: "https://i.ibb.co.com/1ZyPjRL/paper-coffee-bag-mockup-58466-11147-removebg-preview.png",
      alt: "Paper coffee bag",
      title: "Automated Packaging",
      description: "100% environment friendly packaging",
      arcColors: ['#FCD34D', '#10B981', '#EF4444']
    },
    {
      src: "https://i.ibb.co.com/4jmVqL7/cake-box-removebg-preview.png",
      alt: "Cake box",
      title: "Packed with Love",
      description: "We deliver the best experience",
      arcColors: ['#EF4444', '#10B981', '#FCD34D']
    },
    {
      src: "https://i.ibb.co.com/MhsdtBC/Chicken-box-removebg-preview.png",
      alt: "Chicken box",
      title: "Served hot Appetite",
      description: "Promise to deliver within 30 mins",
      arcColors: ['#10B981', '#FCD34D', '#EF4444']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto text-[#3d3c3c] my-12 px-4">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center text-[#3d3c3c] mb-12" style={{ fontFamily: "Josefin Sans, sans-serif" }}>
        How We <span className="text-[#0393b7]">Serve</span> You
      </h1>
      <div className="flex flex-wrap justify-around items-start gap-6 md:gap-0">
        {services.map((service, index) => (
          <CircularImage
            key={index}
            src={service.src}
            alt={service.alt}
            title={service.title}
            description={service.description}
            arcColors={service.arcColors}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWeServeYou;