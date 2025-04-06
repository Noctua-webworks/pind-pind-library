"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Scholars = () => {
  const images = [
    {
      src: "/images/scholars/hari-singh-nalwa.jpg",
      title: "Hari Singh Nalwa",
      subtitle: "(The Great Scholar and Warrior)",
    },
    {
      src: "/images/scholars/abdul_k.jpg",
      title: "APJ Abdul Kalam",
      subtitle:
        "~ Education is the key to unlocking the world, a passport to freedom.",
    },
    {
      src: "/images/scholars/kahan-singh-nabha.jpeg",
      title: "Kahan Singh Nabha",
      subtitle:
        "(Sikh Scholar and Encyclopedist)",
    },
    {
      src: "/images/scholars/dr-babasaheb-ambedkar.avif",
      title: "Dr. B.R. Ambedkar",
      subtitle:
        "~ Be educated, be agitated, be organized, be confident, never give up, these are the five principles of our life.",
    },
    {
      src: "/images/scholars/bhagatsinghsar.jpg",
      title: "Bhagat Singh",
      subtitle: "~ Lovers, lunatics, and poets are made of the same stuff.",
    },
   
  ];

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-0 z-10 p-2 bg-[#58130a] text-white rounded-full shadow-md -translate-y-1/2 top-[40%]"
    >
      <FaChevronLeft size={20} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-0 z-10 p-2 bg-[#58130a] text-white rounded-full shadow-md -translate-y-1/2 top-[40%]"
    >
      <FaChevronRight size={20} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-10 md:mb-20 text-center overflow-hidden relative">
      <h2 className="md:text-5xl text-3xl font-bold text-gray-900 dark:text-white mb-6">
        The Great <span className="text-[#58130a]">Scholars</span>
      </h2>
      <Slider {...settings} className="flex justify-center">
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              height={150}
              width={100}
              src={image.src}
              alt={image.title}
              className="w-auto h-auto object-cover rounded-lg shadow-md mx-auto"
            />
            <p className="mt-2 font-extrabold text-[#58130a] text-2xl">
              {image.title}
            </p>
            <p className="mt-2 mb-4 text-gray-900 text-lg">{image.subtitle}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Scholars;
