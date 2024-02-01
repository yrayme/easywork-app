import React from "react";
import ContactsHeader from "./components/ContactsHeader";

export default function ContactLayout({ children, table }) {
  return (
    <div className="h-calc flex flex-col flex-grow">
      <ContactsHeader />
      {table}
    </div>
  );
}
