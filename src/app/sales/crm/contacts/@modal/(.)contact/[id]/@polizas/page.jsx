"use client";
import React from "react";
import PolizasTab from "./components/PolizasTab";
import PolizasHeader from "./components/PolizasHeader";

export default function Page() {
  return <div className="w-full px-5">
    <PolizasHeader/>
    <PolizasTab/>
  </div>;
}
