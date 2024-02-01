"use client";
import {
  ChatBubbleBottomCenterIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { FaWhatsapp } from "react-icons/fa6";
import clsx from "clsx";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
const contacts = [
  {
    id: 1,
    name: "Luis González",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA",
    birthdate: "05 de Febrero",
    responsable: {
      name: "Rosmer Campos",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    email: "luisgonzalez@gmail.com",
    phone: "+52 1 55 1234 5678",
    created: "26/01/2024",
    source: "Facebook",
  },
  {
    id: 2,
    name: "Laura Pérez",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA",
    birthdate: "28 de Enero",
    responsable: {
      name: "Rosmer Campos",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    email: "laurap@gmail.com",
    phone: "+52 1 56 2345 5678",
    created: "26/01/2024",
    source: "Facebook",
  },
  {
    id: 3,
    name: "Gerardo Blanco",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA",
    birthdate: "30 de Mayo",
    responsable: {
      name: "Rosmer Campos",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    email: "gerardoblanco@gmail.com",
    phone: "+52 3 14 6345 5678",
    created: "26/01/2024",
    source: "Facebook",
  },
  {
    id: 4,
    name: "Cristina Lanz",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA",
    birthdate: "12 de Diciembre",
    responsable: {
      name: "Rosmer Campos",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-1.2.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    email: "cristinalanz@gmail.com",
    phone: "+52 1 67 1234 5678",
    created: "26/01/2024",
    source: "Facebook",
  },
  // More contacts...
];

export default function Page() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedContacts.length > 0 && selectedContacts.length < contacts.length;
    setChecked(selectedContacts.length === contacts.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedContacts]);

  function toggleAll() {
    setSelectedContacts(checked || indeterminate ? [] : contacts);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="relative overflow-hidden   sm:rounded-lg">
            {selectedContacts.length > 0 && (
              <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                <button
                  type="button"
                  className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Eliminar
                </button>
              </div>
            )}
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-white mb-2">
                <tr>
                  <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      ref={checkbox}
                      checked={checked}
                      onChange={toggleAll}
                    />
                  </th>
                  <th
                    scope="col"
                    className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-indigo-100/30"
                  >
                    Cumpleaños
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Responsable
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Teléfono
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Creado El
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Origen
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Actividades
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className={clsx(
                      selectedContacts.includes(contact)
                        ? "bg-gray-50"
                        : undefined,
                      "hover:bg-indigo-100/40 cursor-default"
                    )}
                  >
                    <td className="relative px-7 sm:w-12 sm:px-6">
                      {selectedContacts.includes(contact) && (
                        <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                      )}
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        value={contact.id}
                        checked={selectedContacts.includes(contact)}
                        onChange={(e) =>
                          setSelectedContacts(
                            e.target.checked
                              ? [...selectedContacts, contact]
                              : selectedContacts.filter((p) => p !== contact)
                          )
                        }
                      />
                    </td>
                    <td
                      className={clsx(
                        "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                        selectedContacts.includes(contact)
                          ? "text-indigo-600"
                          : "text-gray-900"
                      )}
                    >
                      <div className="flex items-center">
                        <div className="h-9 w-9 flex-shrink-0">
                          <Image
                            className="h-9 w-9 rounded-full"
                            width={36}
                            height={36}
                            src={contact.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {contact.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 bg-indigo-100/30">
                      {contact.birthdate}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {contact.responsable.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {contact.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {contact.phone}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {contact.created}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {contact.source}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="rounded-full bg-green-600 p-1 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          className="rounded-full bg-indigo-800 p-1 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <EnvelopeIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </button>
                        <button
                          type="button"
                          className="rounded-full bg-indigo-800 p-1 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <ChatBubbleBottomCenterIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </button>
                        <button
                          type="button"
                          className="rounded-full bg-indigo-800 p-1 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
