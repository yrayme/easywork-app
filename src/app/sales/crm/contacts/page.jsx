import { getContacts } from "@/lib/api";
import React from "react";
import BindContacts from "./components/BindContacts";

export default async function Page() {
  const contacts = await getContacts();


  return <BindContacts contacts={contacts}/>
}
