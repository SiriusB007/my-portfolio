import React from "react";
import Slider from "react-slick";

const Process = () => {
  const steps = [
    { name: "Divine Triangle Numerology", img: "https://cdn.usegalileo.ai/sdxl10/21ade379-ad72-4860-9cab-dc8d2c16e599.png" },
    { name: "Moor A.I", img: "Images/MoorAI.png" },
    { name: "Moor Mindful", img: "Images/MM1.png", img: "moormindful.co" },
    { name: "Big Profits", img: "Images/CryptoProfit.png" },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on your design
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="font-bold text-xl pt-8 pb-4">Dev Projects</h2>
      <Slider {...settings}>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url(${step.img})`, width: '300px', height: '300px' }}
            ></div>
            <p className="text-[#111518] text-base font-medium leading-normal">{step.name}</p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Process;
