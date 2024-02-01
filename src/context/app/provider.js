"use client";
import React, { useMemo, useState } from "react";
import { AppContext } from "..";
import { calendarViews, driveViews } from "@/lib/common";

export default function AppContextProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [calendarView, setCalendarView] = useState(calendarViews[0]);
  const [driveView, setDriveView] = useState(driveViews[0]);
  const [openModal, setOpenModal] = useState(false);

  const values = useMemo(
    () => ({
      sidebarOpen,
      setSidebarOpen,
      calendarView,
      setCalendarView,
      driveView,
      setDriveView,
      openModal,
      setOpenModal,
    }),
    [sidebarOpen, calendarView, driveView, openModal]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
