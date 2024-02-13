"use client";

import React, { useMemo, useState } from "react";
import { CrmContext } from "..";

export default function CrmContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [crmUsers, setCrmUsers] = useState([]);
  const [showAddContactModal, setShowAddContactModal] = useState(false);

  const values = useMemo(
    () => ({
      contacts,
      setContacts,
      crmUsers,
      setCrmUsers,
      showAddContactModal,
      setShowAddContactModal,
    }),
    [contacts, crmUsers, showAddContactModal]
  );

  return <CrmContext.Provider value={values}>{children}</CrmContext.Provider>;
}
