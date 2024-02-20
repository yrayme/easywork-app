"use client";
import React, { useMemo, useState } from "react";
import { AppContext } from "..";
import { calendarViews, contactDetailTabs, driveViews } from "@/lib/common";

export default function AppContextProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [calendarView, setCalendarView] = useState(calendarViews[0]);
  const [driveView, setDriveView] = useState(driveViews[0]);
  const [openModal, setOpenModal] = useState(false);
  const [contactDetailTab, setContactDetailTab] = useState(
    contactDetailTabs[0]
  );
  const [showContact, setShowContact] = useState(false);
  const [showPoliza, setShowPoliza] = useState(false);

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
      contactDetailTab,
      setContactDetailTab,
      showContact,
      setShowContact,
      showPoliza,
      setShowPoliza,
    }),
    [
      sidebarOpen,
      calendarView,
      driveView,
      openModal,
      contactDetailTab,
      showContact,
      showPoliza,
    ]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
