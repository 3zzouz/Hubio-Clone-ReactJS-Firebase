import React from "react";
import Info from "./cardInfo";
function Cards() {
  return (
    <div className="mx-auto flex flex-wrap gap-4 w-80 px-2 sm:w-[30rem] sm:px-12 sm:gap-7 md:w-[35rem] lg:w-[65rem] lg:flex-nowrap lg:space-x-2">
      {Info.map((card, cardIndex) => (
        <div
          key={cardIndex}
          className="flex flex-col items-center w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 bg-white rounded-2xl justify-around drop-shadow-xl sm:drop-shadow-2xl mx-auto"
        >
          <img
            src={card.url}
            alt=""
            className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem]"
          />
          <h1 className="font-bold text-center text-xs sm:text-sm md:text-base">
            {card.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Cards;
