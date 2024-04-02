"use client"
import useAppContext from "@/context/app";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function CreateContactButton() {
  const { setOpenModal } = useAppContext();

  return (
    <button
      type="button"
      onClick={() => setOpenModal(true)}
      className="flex rounded-md bg-easy-dark px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-easy-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Crear
      <ChevronDownIcon
        className="ml-2 h-5 w-5 text-white"
        aria-hidden="true"
      />
    </button>
  );
}
