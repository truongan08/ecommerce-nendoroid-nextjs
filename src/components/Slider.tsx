"use client";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const sliders = [
    {
      id: 1,
      header: "Lorem Ipsum",
      info: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      image: "/images/banner1.jpg",
    },
    {
      id: 2,
      header: "Lorem Ipsum",
      info: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance",
      image: "/images/banner2.jpg",
    },
    {
      id: 3,
      header: "Lorem Ipsum",
      info: "Donec vel nisl elit. Phasellus non faucibus justo, vitae commodo diam. Donec vehicula volutpat pretium. Praesent ac nibh ac metus tincidunt commodo faucibus ut felis",
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
    <div className="w-full mx-auto p-6 mt-12 max-md:mt-16">
      {sliders.map((slider) => (
        <div
          key={slider.id}
          className="container mx-auto mt-12"
          style={{ display: id === slider.id ? "block" : "none" }}
        >
          <div
            className="bg-cover bg-center h-auto text-white py-40 px-10 object-fill"
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
