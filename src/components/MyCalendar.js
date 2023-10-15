import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../calendar.css' 

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Calendar onChange={handleDateChange} value={selectedDate} className='text-sm' />
  );
};

export default MyCalendar;
