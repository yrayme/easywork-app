"use client";

import React, { useMemo, useState } from "react";
import { ToolContext } from "..";

export default function ToolContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [crmUsers, setToolUsers] = useState([]);

  const values = useMemo(
    () => ({ contacts, setContacts, crmUsers, setToolUsers }),
    [contacts, crmUsers]
  );

  return <ToolContext.Provider value={values}>{children}</ToolContext.Provider>;
}
