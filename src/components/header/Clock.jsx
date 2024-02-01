"use client";
import React, { useEffect, useState } from "react";

export default function Clock() {
  const [timeState, setTimeState] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      // Mostrar solo horas y minutos
      setTimeState(
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Si timeState es null, mostrar un placeholder
  if (timeState === null) {
    return (
      <div className="animate-pulse bg-zinc-400 h-6 w-20 rounded-sm"></div>
    );
  }

  return <div className="text-lg md:text-2xl text-slate-700">{timeState}</div>;
}
