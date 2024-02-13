"use client";

import { useContext } from "react";
import { ToolContext } from "..";

export function useToolContext() {
  const context = useContext(ToolContext);

  if (!context) {
    throw new Error("useToolContext must be used within an ToolContextProvider");
  }

  return context;
}

export default useToolContext;