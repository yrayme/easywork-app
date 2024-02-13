"use client";
import useCrmContext from "@/context/crm";
import React, { useEffect } from "react";

export const revalidate = 3600

export default function BindContacts({ contacts }) {
  const { setContacts } = useCrmContext();
  console.log('contacts', contacts)
    useEffect(() => {
        setContacts(contacts);
    }, [contacts]);

  return <></>;
}
