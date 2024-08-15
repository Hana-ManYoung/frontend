import React from "react";
import { IoMdSquare } from "react-icons/io";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/core/locales/ko";
import "../../../../css/calendar.css";

export default function Calendar({ events }) {
  return (
    <div className="relative mt-4 h-[26rem] px-6 pt-4 pb-6 bg-emerald-100 rounded-xl shadow-md shadow-gray-200">
      <div className="absolute text-xs text-gray-500 bottom-1 right-7 z-10 flex">
        <div className="mr-1 flex items-center">
          <IoMdSquare className="text-blue-300 mr-1" /> <p>참여 O</p>
        </div>
        <div className="ml-1 flex items-center">
          <IoMdSquare className="text-gray-300 mr-1" /> <p>참여 X</p>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="ko"
        events={events}
      />
    </div>
  );
}
