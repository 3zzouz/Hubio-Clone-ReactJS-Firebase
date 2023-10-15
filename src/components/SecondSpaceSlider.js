import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../secondslider.css";
let info = [
  {
    url: "https://hubio-dev.web.app/20211204_124236.42020244.webp",
  },
  {
    url: "https://hubio-dev.web.app/20211204_122322.24e231f9.webp",
  },
  {
    url: "https://hubio-dev.web.app/20211204_124455.90c44bac.webp",
  },
  {
    url: "https://hubio-dev.web.app/20211204_124934.898c2d47.webp",
  },
  {
    url: "https://hubio-dev.web.app/20211204_124945.17d68f4e.webp",
  },
  {
    url: "https://hubio-dev.web.app/20211204_122428.7390f1d1.webp",
  },
  {
    url: "https://hubio-dev.web.app/20211204_124746.b35d40db.webp",
  },
  {
    url: "https://hubio-dev.web.app/Coffee-Shop.54ade7f1.webp",
  },
];
let responsive = {
  largedesktop: {
    breakpoint: { max: 99999999, min: 951 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 950, min: 761 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 760, min:451 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 450, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const SecondSpaceSlider = () => (
  <Carousel
    responsive={responsive}
    className=" mx-auto w-[100vw]"
    itemClass="h-full mx-auto my-[10vw]"
    infinite={true}
  >
    {info.map((image, imageindex) => (
      <img
        src={image.url}
        key={imageindex}
        className="m-auto aspect-video h-full w-[85%] rounded-lg drop-shadow-xl"
        alt=""
      />
    ))}
  </Carousel>
);

export default SecondSpaceSlider;
