import React from "react";

export default function ToolHeader({
  title,
  ActionButton,
  ToolsButtons,
  children,
}) {
  return (
    <header className="flex flex-col">
      <div className="lg:px-6 px-2 flex gap-3 items-center bg-white py-4 rounded-md">
        <h1 className="text-2xl font-semibold leading-6 text-gray-900 hidden md:block">
          {title}
        </h1>
        <ActionButton />

        <div className="flex-grow">
          <label htmlFor="search" className="sr-only">
            search
          </label>
          <input
            type="search"
            name="search"
            id="search-cal"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Buscar"
          />
        </div>
        {ToolsButtons}
      </div>

      {children}
    </header>
  );
}
