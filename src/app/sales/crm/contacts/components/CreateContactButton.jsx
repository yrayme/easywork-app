import Link from "next/link";
import React from "react";

export default function CreateContactButton() {
  return (
    <Link
      href={"/sales/crm/contacts/create_contact"}
      type="button"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Crear
    </Link>
  );
}
