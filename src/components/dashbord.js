import React from "react";
import MyCalendar from "./MyCalendar.js";

function Dashbord() {
  return (
    <div className="relative h-[80%]">
      <div className="absolute bottom-0 right-0">
        <MyCalendar />
      </div>
    </div>
  );
}

export default Dashbord;
