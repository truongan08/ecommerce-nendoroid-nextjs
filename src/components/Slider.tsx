"use client";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const sliders = [
    {
      id: 1,
      image: "/images/banner1.jpg",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
    },
  ];
  const [id, setId] = useState(1);
  const slidersLength = sliders.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (id >= slidersLength) {
        setId(1);
      } else {
        setId(id + 1);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [id, slidersLength]);

  //   const nextSlider = () => {
  //     if (id === slidersLength) {
  //       setId(1);
  //     } else {
  //       setId(id + 1);
  //     }
  //   };

  //   const previousSlider = () => {
  //     if (id <= 1) {
  //       setId(slidersLength);
  //     } else {
  //       setId(id - 1);
  //     }
  //   };

  return (
    <div className="w-full h-full mx-auto p-6 mt-16 max-md:mt-16">
      {sliders.map((slider) => (
        <div
          key={slider.id}
          className="container mx-auto "
          style={{ display: id === slider.id ? "block" : "none" }}
        >
          <div
            className="bg-cover bg-center h-auto text-white py-40 px-10 mt-8 max-md:mt-16 border-2"
            style={{
              backgroundImage: `url(${slider.image})`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
export default Slider;
