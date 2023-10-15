import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
let url = "https://hubio-dev.web.app/Vector%20Smart%20Object.2f43872f.png";
let info = [
  {
    url: "https://hubio-dev.web.app/gem%20(6).aa082856.webp",
    title: "Half Day",
    des: "Got a couple of hours to boost your knowledge ? We got your back with our Half day pass.",
    color: "#3bd7ca",
    price: 5,
  },
  {
    url: "https://hubio-dev.web.app/gem%20(3)%202.fd4fbd9b.webp",
    title: "Day",
    des: "Feeling motivated for a study marathon? As long as you’re feeling the vibes, we’ve got you all covered.",
    color: "#4cbee5",
    price: 8,
  },
  {
    url: "https://hubio-dev.web.app/gem%20(4)%202.bd153bd8.webp",
    title: "Week",
    des: "You want to dedicate a whole week to seriously prepare for your exams? The little owl has what you need.",
    color: "#4f98e6",
    price: 43,
  },
  {
    url: "https://hubio-dev.web.app/gem.926a73c5.webp",
    title: "Month",
    des: "Interested in becoming weld eddar ? The little owl opens it's nest's doors with a month subscription.",
    color: "#cf41ee",
    price: 115,
  },
  {
    url: "https://hubio-dev.web.app/gem%20(5)%202.b0025b83.webp",
    title: "2 Months",
    des: "Interested in becoming weld eddar ? The little owl opens it's nest's doors with a month subscription.",
    color: "#ff8400",
    price: 205,
  },
  {
    url: "https://hubio-dev.web.app/gem%20(1)%202.e5c58f59.webp",
    title: "3 Months",
    des: "Interested in becoming weld eddar ? The little owl opens it's nest's doors with a month subscription.",
    color: "#ffc500",
    price: 295,
  },
];
const responsive = {
  largedesktop: {
    breakpoint: { max: 99999999, min: 966 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 965, min: 841 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 840, min: 451 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 450, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ThirdSpaceSwiper = () => (
  <Carousel
    responsive={responsive}
    showDots={true}
    arrows={false}
    itemClass="w-fit"
    className="mx-auto h-[37rem] 2xl:h-[45rem] w-[90%] pb-5"
    sliderClass="h-[75%] xs:h-[80%] md:h-[85%] 2xl:h-[88%]"
    
  >
    {info.map((el, elindex) => {
      return (
        <div
          key={elindex}
          className={
            "group relative z-50 bg-white flex h-[100%] w-[90%] flex-col space-y-5 rounded-2xl px-2 pb-4 pt-5 shadow-[0_10px_20px_rgba(0,0,0,.2)] transition-all hover:h-[105%]"
          }
        >
          <img
            src={el.url}
            alt=""
            className="z-10 mx-auto w-[18vw] max-w-[100px] group-hover:w-[19vw] group-hover:max-w-[120px]"
          />
          <img
            src={url}
            alt=""
            className="absolute left-[30%] top-[2%] h-auto w-[20vw] max-w-[120px] rotate-[200deg] opacity-40 xs:left-[20%] lg:left-[25%] lg:top-[-1%] "
          />
          <h3 className="z-50 w-full text-2xl font-bold lg:text-[2.5vw]">
            {el.title}
          </h3>
          <div className="flex flex-col space-y-5 ">
            <div className="z-50 h-1 w-10 rounded-[1vw] bg-[#b7b7b7] md:h-[0.25vw] md:w-[3.5vw] 2xl:my-4"></div>
            <p className="z-50 w-full text-sm sm:text-base 2xl:text-2xl">{el.des}</p>
          </div>
            <h3 className="xs:text-[max(5vw,_3rem)] lg:text-[min(5vw,_6rem)] mx-auto w-fit before:xs:text-[max(1.5vw,_1rem)] absolute bottom-4 xs:bottom-8 left-0 right-0 z-50 text-5xl font-semibold before:absolute before:-right-[1.5rem] before:-top-[1rem] before:text-base before:text-[#6499d3] before:content-['TND']">
              {el.price}
            </h3>
          <div
            style={{ backgroundColor: el.color }}
            className={`absolute bottom-0 left-0 z-50 h-[3%] w-full  rounded-b-2xl `}
          ></div>
        </div>
      );
    })}
  </Carousel>
);

export default ThirdSpaceSwiper;
