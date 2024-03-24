import React from "react";
import Slider from "react-slick";
import { useTestimonialGetQuery } from "../../redux/features/testimonial/testimonialApi";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const styleObject = {
    h3: {
      color: "#2A9D8F",
      marginBottom: "10px",
    },
    h2: {
      color: "black",
      marginBottom: "20px",
    },
    gradient: {
      background: "rgba(42, 157, 143, 0.15)",
    },
    pColor: {
      color: "#656565",
    },
    primary: {
      color: "#2A9D8F",
    },
    secondary: {
      backgroundColor: "#2A9D8F",
    },
  };

  const { data: testimonials, isLoading, isError } = useTestimonialGetQuery();

  let content = null;

  if (isLoading && !isError) {
    content = <p>Loading</p>;
  } else if (!isLoading && isError) {
    content = <p>An error occurred</p>;
  } else if (!isLoading && testimonials.length === 0) {
    content = <p>No Data Found</p>;
  } else if (!isLoading && !isError && testimonials.length > 0) {
    content = testimonials.map((testimonial) => (
      <div
        pl-4
        mr-4
        pt-4
        h-72
        bg-white
        border
        border-gray-200
        rounded-lg
        shadow
        key={testimonial.id}
      >
        <TestimonialCard testimonial={testimonial} />
      </div>
    ));
  }

  return (
    <div className="slider-container">
      <h3 className="text-2xl mb-4 text-center text-accent font-medium">
        Talk with our happy client
      </h3>
      <h2
        style={styleObject.h2}
        className=" text-3xl md:text-4xl text-center font-semibold max-w-2xl mx-auto"
      >
        Let's Learn What Our Client Says
      </h2>

      <p className="mb-6 mx-auto text-base max-w-xs md:max-w-sm font-normal text-gray-500 dark:text-gray-400 text-center">
        Our Client is much more happy and confident about work,their reviews
        will give you a clear picture.
      </p>
      <Slider {...settings}>{content}</Slider>
    </div>
  );
}

export default Testimonial;
