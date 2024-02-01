import { BellIcon, FlagIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Status() {
  return (
    <div className="md:flex flex-col gap-1 items-start hidden">
      <div className="flex gap-x-2">
        <div className="flex items-center gap-x-1">
          <BellIcon className="h-3 w-3 text-slate-700" aria-hidden="true" />
          <p className="text-slate-700 text-xs">2:30pm</p>
        </div>
        <div className="flex items-center gap-x-1">
          <FlagIcon className="h-3 w-3 text-slate-700" aria-hidden="true" />
          <p className="text-slate-700 text-xs">10</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <PlayCircleIcon className="h-3 w-3 text-slate-700" aria-hidden="true" />
        <p className="text-xs text-slate-700">Trabajando</p>
      </div>
    </div>
  );
}
