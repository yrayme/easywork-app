import { Button, Dialog, DialogPanel } from "@tremor/react";
import React from "react";
import SelectRamo from "./SelectRamo";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { BsFileEarmarkPdf } from "react-icons/bs";

export default function PolizasHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [file, setFile] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsOpen(false);
    setFile(null);
  }

  return (
    <div className="bg-white w-full p-2 rounded-md flex gap-3">
      <button
        type="button"
        className="rounded-md bg-easy-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-easy-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-easy-600"
      >
        General
      </button>
      <SelectRamo />
      <button
        type="button"
        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Documentos
      </button>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-x-1.5 rounded-md bg-easy-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-easy-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-easy-600"
      >
        <PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Agregar
      </button>

      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
            <h1 className="text-center pb-2 text-xl font-semibold">Agregar Póliza GNP</h1>
          <form onSubmit={handleSubmit}>
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            
          >
            <BsFileEarmarkPdf className="mx-auto h-12 w-12 text-gray-400" />
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
                onChange={(e) => setFile(e.target.files[0])}
              accept="application/pdf"
            />
            <span className="mt-2 block text-sm font-semibold text-gray-900">
              {file ? file.name : "Selecciona un archivo"}
            </span>
          </label>
          <Button className="mt-8 w-full" type="submit">
            ¡Subir!
          </Button>
          </form>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
