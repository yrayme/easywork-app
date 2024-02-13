import React, { Suspense } from "react";
import ContactsHeader from "./components/ContactsHeader";
import CreateContactModal from "./components/create_contact/CreateContactModal";

export default async function ContactLayout({ children, table, modal }) {
  return (
    <div className="h-calc flex flex-col flex-grow">
      <Suspense fallback={<div>Loading...</div>}>
        {modal}
        <CreateContactModal />
        <ContactsHeader />
        {table}
        {children}
      </Suspense>
    </div>
  );
}
