// TextArea.js
import React from "react";

function TextArea({ label, id, placeholder }) {
  return (
    <div className="col-span-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id={id}
          name={id}
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
      {/* <p className="mt-1 text-sm leading-6 text-gray-400">
        {`Escriba la ${label.toLowerCase()} del cliente.`}
      </p> */}
    </div>
  );
}

export default TextArea;
