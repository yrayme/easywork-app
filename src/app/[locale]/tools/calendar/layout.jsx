"use client";
import useAppContext from "@/context/app";
import CalendarHeader from "./components/CalendarHeader";
import { calendarViews } from "@/lib/common";
import Link from "next/link";

export default function CalendarLayout({
  children,
  day,
  week,
  month,
  programar,
  modal,
}) {
  const { calendarView } = useAppContext();

  return (
    <>
      <div className="flex flex-col flex-grow">
        <CalendarHeader />
        {modal}
        <div className="h-[63vh] mb-10 overflow-auto">
          {children}
          {calendarView === calendarViews[0]
            ? day
            : calendarView === calendarViews[1]
            ? week
            : calendarView === calendarViews[2]
            ? month
            : programar}
          </div>
      </div>
    </>
  );
}
