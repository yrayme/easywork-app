import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Toolbox() {
  return (
    <div className="bg-neutral-300 px-20 pt-2 pb-10 rounded-xl">
      <h2 className="text-4xl text-center font-bold text-gray-900 py-2">
        Herramientas
      </h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
      >
        <li className="col-span-1 rounded-lg bg-white text-center shadow relative">
          <Link
            className="relative h-full w-full overflow-hidden rounded-lg"
            href="/tools/drive"
          >
            <Image
              width={200}
              height={200}
              src={"/img/herramientas/drive.png"}
              alt={"Drive"}
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </li>
        <li className="col-span-1 rounded-lg bg-white text-center shadow relative">
          <Link
            className="relative h-full w-full overflow-hidden rounded-lg"
            href="/tools/tasks"
          >
            <Image
              width={200}
              height={200}
              src={"/img/herramientas/tareas.png"}
              alt={"Task"}
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </li>
        <li className="col-span-1 rounded-lg bg-white text-center shadow relative">
          <Link
            className="relative h-full w-full overflow-hidden rounded-lg"
            href="/tools/calendar"
          >
            <Image
              width={200}
              height={200}
              src={"/img/herramientas/calendario.webp"}
              alt={"Calendar"}
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </li>
        <li className="col-span-1 rounded-lg bg-white text-center shadow relative">
          <Link
            className="relative h-full w-full overflow-hidden rounded-lg"
            href="/tools/webmail"
          >
            <Image
              width={200}
              height={200}
              src={"/img/herramientas/correo.png"}
              alt={"Email"}
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
