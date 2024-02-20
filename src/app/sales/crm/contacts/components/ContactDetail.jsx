"use client";
import React from "react";
import AddContactTabs from "./create_contact/AddContactTabs";
import useCrmContext from "@/context/crm";

export default function ContactDetail({ children }) {
  const { currentContact } = useCrmContext();
  const [editMode, setEditMode] = React.useState(false);

  return (
    <div className="flex flex-col h-screen">
      <form
        action=""
        className="flex flex-col flex-1 bg-zinc-200 opacity-100 shadow-xl text-zinc-800 overflow-hidden rounded-tl-3xl"
      >
        {/* Encabezado del Formulario */}
        <div className="bg-transparent py-6 mx-4">
          <div className="flex items-start flex-col justify-between space-y-3">
            <h1 className="text-2xl">
              {currentContact.nombre} {currentContact.apellidos}
            </h1>
            <AddContactTabs />
            {/* <AddContactTabs /> */}
          </div>
        </div>

        {/* Cuerpo del Formulario */}
        {children}
        {/* Botones de acción */}
        {editMode && (
          <div className="flex justify-start px-4 py-4 sticky bottom-0 bg-zinc-200">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Guardar
            </button>
            <button
              type="button"
              className="ml-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
            >
              Cancelar
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
