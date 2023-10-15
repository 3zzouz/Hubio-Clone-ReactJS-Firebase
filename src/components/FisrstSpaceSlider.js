import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../slider.css"
let info = [
  {
    url: "https://hubio-dev.web.app/growth.c84ede9d.png",
    title: "Growth",
    des: "Good vibes & positive community",
  },
  {
    url: "https://hubio-dev.web.app/cat.c425a2f6.png",
    title: "Silence",
    des: "Soundproof studying rooms with comfortable lighting ",
  },
  {
    url: "images/Stars.webp",
    title: "Efficiency",
    des: "High speed internet",
  },
  {
    url: "https://hubio-dev.web.app/plant.648151b7.png",
    title: "Positive Space",
    des: "Smoking free spaces",
  },
  {
    url: "https://hubio-dev.web.app/living-room.58979900.png",
    title: "Comfort",
    des: "Cozy seats & individual power sockets",
  },
];
const responsive = {
  largedesktop: {
    breakpoint: { max: 99999999, min: 951 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 950, min: 761 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 760, min: 500 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function FisrstSpaceSlider() {
  return (
    <Carousel responsive={responsive}
    showDots={true}
    itemClass="mx-auto"
    containerClass="w-[95vw] xs:w-[90vw] sm:w-[80vw] mx-auto"
    arrows={false}
    className="py-12"
    >
      {info.map((element, elementIndex) => (
        <div 
        key={elementIndex}
        className="flex h-[100%] w-[9rem] mx-auto  grow flex-col items-center justify-between space-y-5 rounded-xl border bg-white p-5 drop-shadow-xl lg:w-[80%]">
          <img src={element.url} alt="" className="w-[55%]" />
          <div className="h-[65%]">
            <h3 className="mr-auto text-left font-bold">{element.title}</h3>
            <p className="mr-auto mt-[1vw] w-full text-left text-xs font-light lg:text-base">
              {element.des}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default FisrstSpaceSlider;
