"use client";

import { useContext } from "react";
import { CrmContext } from "..";

export function useCrmContext() {
  const context = useContext(CrmContext);

  if (!context) {
    throw new Error("useCrmContext must be used within an CrmContextProvider");
  }

  return context;
}

export default useCrmContext;