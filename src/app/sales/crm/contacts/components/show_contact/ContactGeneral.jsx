import {
  PencilSquareIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import ProfileImageInput from "../create_contact/ProfileImageInput";
import TextInputLocal from "../create_contact/TextInputLocal";
import SelectInput from "../create_contact/SelectInput";
import TextareaLabel from "../TextareaLabel";
import ContactActivityPanel from "../ContactActivityPanel";
import ActivityHeader from "../ActivityHeader";
import CardTask from "../CardTask";
import clsx from "clsx";
import { getURLContactPhoto } from "@/lib/common";
import useCrmContext from "@/context/crm";

export const revalidate = 3600;

const timeline = [
  {
    id: 1,
    child: ActivityHeader,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    child: CardTask,
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: VideoCameraIcon,
    iconBackground: "bg-blue-500",
  },
];

const sexoOptions = [
  { id: 1, name: "Masculino" },
  { id: 2, name: "Femenino" },
  { id: 3, name: "Otro" },
];

export default function ContactGeneral() {
  const { currentContact } = useCrmContext();
  const editMode = false;

  console.log("currentContact", currentContact);

  if (!currentContact) {
    return <div>Sin contacto</div>;
  }

  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row h-full bg-zinc-100 mx-4 rounded-lg",
        editMode && "pb-[13.5rem]"
      )}
    >
      {/* Menu Izquierda */}
      <div className="sm:w-1/2 bg-transparent p-4 overflow-y-scroll">
        <h1 className="bg-zinc-200 py-4 px-4 rounded-md flex justify-between">
          Datos del Contratante
          <button>
            <span className="sr-only">Editar</span>
            <PencilSquareIcon className="h-6 w-6 text-gray-500 hover:text-indigo-400" />
          </button>
        </h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:max-w-xl sm:grid-cols-6 h-full px-1 lg:px-12 mx-auto">
          <ProfileImageInput
            selectedProfileImage={getURLContactPhoto(currentContact)}
          />
          <TextInputLocal
            label="Nombres"
            id="nombre"
            value={currentContact.nombre}
          />
          <TextInputLocal
            label="Apellidos"
            id="apellidos"
            value={currentContact.apellidos}
          />
          <TextInputLocal
            label="Cargo"
            id="cargo"
            value={currentContact.cargo}
          />
          <TextInputLocal
            label="CURP"
            id="curp"
            value={currentContact.cargo}
            hidden
          />
          <TextInputLocal
            label="Teléfono"
            id="telefono"
            value={currentContact.telefono}
          />
          <TextInputLocal
            label="Email"
            id="email"
            type="email"
            value={currentContact.email}
          />
          <TextInputLocal
            label="Fecha de Nacimiento"
            id="nacimiento"
            type="date"
            value={currentContact.nacimiento}
          />
          <SelectInput label="Sexo" id="sexo" options={sexoOptions} />
          <TextInputLocal label="RFC" id="rfc" value={currentContact.rfc} />
          <TextInputLocal
            label="Código Postal"
            id="postal"
            value={currentContact.postal}
          />
          <TextareaLabel
            label="Dirección"
            id="direccion"
            value={currentContact.direccion}
          />
          <SelectInput
            label="Tipo de Contacto"
            id="contactType"
            options={sexoOptions}
          />
          <SelectInput
            label="Responsable"
            id="responsible"
            options={sexoOptions}
          />
          <TextInputLocal
            label="Agente"
            id="agente"
            value={currentContact.agente}
          />
          <TextInputLocal
            label="Sub-Agente"
            id="subAgente"
            value={currentContact.subAgente}
          />
          <SelectInput
            label="Origen"
            id="contactSource"
            options={sexoOptions}
          />
        </div>
      </div>

      <ContactActivityPanel editing={false} timeline={timeline} />
    </div>
  );
}
