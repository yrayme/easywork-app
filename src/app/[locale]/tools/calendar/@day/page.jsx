"use client";
import { useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const days = [
  { date: "2024-01-01", isCurrentMonth: true },
  { date: "2024-01-02", isCurrentMonth: true },
  { date: "2024-01-03", isCurrentMonth: true },
  { date: "2024-01-04", isCurrentMonth: true },
  { date: "2024-01-05", isCurrentMonth: true },
  { date: "2024-01-06", isCurrentMonth: true },
  { date: "2024-01-07", isCurrentMonth: true },
  { date: "2024-01-08", isCurrentMonth: true },
  { date: "2024-01-09", isCurrentMonth: true },
  { date: "2024-01-10", isCurrentMonth: true },
  { date: "2024-01-11", isCurrentMonth: true },
  { date: "2024-01-12", isCurrentMonth: true },
  { date: "2024-01-13", isCurrentMonth: true },
  { date: "2024-01-14", isCurrentMonth: true },
  { date: "2024-01-15", isCurrentMonth: true },
  { date: "2024-01-16", isCurrentMonth: true },
  { date: "2024-01-17", isCurrentMonth: true },
  { date: "2024-01-18", isCurrentMonth: true },
  { date: "2024-01-19", isCurrentMonth: true },
  { date: "2024-01-20", isCurrentMonth: true },
  { date: "2024-01-21", isCurrentMonth: true },
  { date: "2024-01-22", isCurrentMonth: true },
  { date: "2024-01-23", isCurrentMonth: true },
  { date: "2024-01-24", isCurrentMonth: true },
  { date: "2024-01-25", isCurrentMonth: true },
  { date: "2024-01-26", isCurrentMonth: true, isToday: true },
  { date: "2024-01-27", isCurrentMonth: true, isSelected: true },
  { date: "2024-01-28", isCurrentMonth: true },
  { date: "2024-01-29", isCurrentMonth: true },
  { date: "2024-01-30", isCurrentMonth: true },
  { date: "2024-01-31", isCurrentMonth: true },
  { date: "2024-02-01" },
  { date: "2024-02-02" },
  { date: "2024-02-03" },
  { date: "2024-02-04" },
];

export default function DayView() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    container.current.scrollTop =
      ((container.current.scrollHeight -
        containerNav.current.offsetHeight -
        containerOffset.current.offsetHeight) *
        currentMinute) /
      1440;
  }, []);

  return (
    <div className="isolate flex flex-auto overflow-hidden bg-slate-100">
      <div
        ref={container}
        className="flex flex-auto flex-col overflow-auto bg-white"
      >
        <div
          ref={containerNav}
          className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
        >
          <button
            type="button"
            className="flex flex-col items-center pb-1.5 pt-3"
          >
            <span>W</span>
            {/* Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" */}
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              19
            </span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center pb-1.5 pt-3"
          >
            <span>T</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-indigo-600">
              20
            </span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center pb-1.5 pt-3"
          >
            <span>F</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              21
            </span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center pb-1.5 pt-3"
          >
            <span>S</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
              22
            </span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center pb-1.5 pt-3"
          >
            <span>S</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              23
            </span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center pb-1.5 pt-3"
          >
            <span>M</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              24
            </span>
          </button>
          <button
            type="button"
            className="flex flex-col items-center pb-1.5 pt-3"
          >
            <span>T</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              25
            </span>
          </button>
        </div>
        <div className="flex w-full flex-auto">
          <div className="w-14 flex-none bg-white ring-1 ring-gray-100" />
          <div className="grid flex-auto grid-cols-1 grid-rows-1">
            {/* Horizontal lines */}
            <div
              className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
              style={{ gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))" }}
            >
              <div ref={containerOffset} className="row-end-1 h-7"></div>
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  12AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  1AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  2AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  3AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  4AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  5AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  6AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  7AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  8AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  9AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  10AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  11AM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  12PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  1PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  2PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  3PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  4PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  5PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  6PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  7PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  8PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  9PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  10PM
                </div>
              </div>
              <div />
              <div>
                <div className="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                  11PM
                </div>
              </div>
              <div />
            </div>

            {/* Events */}
            <ol
              className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
              style={{
                gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
              }}
            >
              <li
                className="relative mt-px flex"
                style={{ gridRow: "74 / span 12" }}
              >
                <a
                  href="#"
                  className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"
                >
                  <p className="order-1 font-semibold text-blue-700">
                    Breakfast
                  </p>
                  <p className="text-blue-500 group-hover:text-blue-700">
                    <time dateTime="2022-01-22T06:00">6:00 AM</time>
                  </p>
                </a>
              </li>
              <li
                className="relative mt-px flex"
                style={{ gridRow: "92 / span 30" }}
              >
                <a
                  href="#"
                  className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs leading-5 hover:bg-pink-100"
                >
                  <p className="order-1 font-semibold text-pink-700">
                    Flight to Paris
                  </p>
                  <p className="order-1 text-pink-500 group-hover:text-pink-700">
                    John F. Kennedy International Airport
                  </p>
                  <p className="text-pink-500 group-hover:text-pink-700">
                    <time dateTime="2022-01-22T07:30">7:30 AM</time>
                  </p>
                </a>
              </li>
              <li
                className="relative mt-px flex"
                style={{ gridRow: "134 / span 18" }}
              >
                <a
                  href="#"
                  className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs leading-5 hover:bg-indigo-100"
                >
                  <p className="order-1 font-semibold text-indigo-700">
                    Sightseeing
                  </p>
                  <p className="order-1 text-indigo-500 group-hover:text-indigo-700">
                    Eiffel Tower
                  </p>
                  <p className="text-indigo-500 group-hover:text-indigo-700">
                    <time dateTime="2022-01-22T11:00">11:00 AM</time>
                  </p>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 max-w-md flex-none border-l border-gray-100 px-8 py-10 md:block">
        <div className="flex items-center text-center text-gray-900">
          <button
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto text-sm font-semibold">Enero 2024</div>
          <button
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
          <div>L</div>
          <div>M</div>
          <div>M</div>
          <div>J</div>
          <div>V</div>
          <div>S</div>
          <div>D</div>
        </div>
        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
          {days.map((day, dayIdx) => (
            <button
              key={day.date}
              type="button"
              className={clsx(
                "py-1.5 hover:bg-gray-100 focus:z-10",
                day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                (day.isSelected || day.isToday) && "font-semibold",
                day.isSelected && "text-white",
                !day.isSelected &&
                  day.isCurrentMonth &&
                  !day.isToday &&
                  "text-gray-900",
                !day.isSelected &&
                  !day.isCurrentMonth &&
                  !day.isToday &&
                  "text-gray-400",
                day.isToday && !day.isSelected && "text-indigo-600",
                dayIdx === 0 && "rounded-tl-lg",
                dayIdx === 6 && "rounded-tr-lg",
                dayIdx === days.length - 7 && "rounded-bl-lg",
                dayIdx === days.length - 1 && "rounded-br-lg"
              )}
            >
              <time
                dateTime={day.date}
                className={clsx(
                  "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                  day.isSelected && day.isToday && "bg-indigo-600",
                  day.isSelected && !day.isToday && "bg-gray-900"
                )}
              >
                {day.date.split("-").pop().replace(/^0/, "")}
              </time>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
