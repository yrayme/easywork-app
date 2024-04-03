"use client";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ContactSubMenu() {
  const { t } = useTranslation();
  return (
    <div className="flex">
      <div className="bg-zinc-300/40 rounded-full flex gap-1 items-center">
        <button className="text-xs h-full font-medium py-2 px-4 hover:bg-zinc-300/50 rounded-l-full hover:underline text-indigo-950">
          {t('contacts:header:mine')}
        </button>
        <p className="text-xs font-medium py-2 px-1 text-indigo-950">
          {t('contacts:header:elements')}
        </p>
        <div className="flex items-center h-full py-2 gap-1 hover:bg-zinc-300/50 px-2 cursor-pointer">
          <span className="inline-flex items-center rounded-full bg-zinc-200 px-1.5 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-indigo-700/10">
            0
          </span>
          <p className="text-xs text-gray-900 font-medium my-auto">{t('contacts:header:planned')}</p>
        </div>
        <div className="flex items-center h-full py-2 gap-1 hover:bg-zinc-300/50 px-2 cursor-pointer">
          <span className="inline-flex items-center rounded-full bg-zinc-200 px-1.5 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-indigo-700/10">
            0
          </span>
          <p className="text-xs text-gray-900 font-medium my-auto">
            {t('contacts:header:invitation')}
          </p>
        </div>
        {/* Separator */}
        <div className="w-0.5 h-5 bg-gray-300" />
        <p className="text-xs font-medium py-2 px-4 text-indigo-950">{t('contacts:header:others')}:</p>
        <div className="flex items-center h-full py-2 gap-1 hover:bg-zinc-300/50 px-2 cursor-pointer">
          <span className="inline-flex items-center rounded-full bg-zinc-200 px-1.5 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-indigo-700/10">
            0
          </span>
          <p className="text-xs text-gray-900 font-medium my-auto">{t('contacts:header:expired')}</p>
        </div>
        <div className="flex items-center h-full py-2 gap-1 hover:bg-zinc-300/50 px-2 cursor-pointer">
          <span className="inline-flex items-center rounded-full bg-zinc-200 px-1.5 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-inset ring-indigo-700/10">
            0
          </span>
          <p className="text-xs text-gray-900 font-medium my-auto">
            {t('contacts:header:comments')}
          </p>
        </div>
        <div className="w-0.5 h-5 bg-gray-300" />
        <button className="text-xs h-full font-medium py-2 px-4 hover:bg-zinc-300/50 rounded-r-full hover:underline text-indigo-950">
          {t('contacts:header:mark-all')}
        </button>
      </div>
    </div>
  );
}
