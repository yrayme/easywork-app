import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

export const calendarViews = ["día", "semana", "mes", "programar"];

export const contactSubmenuOptions = [
  "míos",
  "mis elementos",
  "planeados",
  "mas",
  "otros",
  "vencida",
  "comentarios",
  "marcar todo como leido",
];

export const driveViews = ["table", "icon", "thumb"];
export const driveMimeTypes = [
  "image",
  "audio",
  "video",
  "application",
  "pdf",
  "document",
  "text",
  "message",
  "model",
  "multipart",
  "font",
  "unknown",
  "folder",
];

export const sidebarNavigation = [
  {
    name: "Herramientas",
    href: "#",
    icon: HomeIcon,
    current: true,
    children: [
      { name: "Drive-Documentos", href: "/tools/drive" },
      { name: "Tareas", href: "/tools/task" },
      { name: "Correo", href: "/tools/webmail" },
      { name: "Calendario", href: "/tools/calendar" },
    ],
  },
  {
    name: "Ventas",
    icon: UsersIcon,
    current: false,
    children: [
      {
        name: "CRM",
        href: "#",
        children: [
          { name: "Contactos", href: "/sales/crm/contacts" },
          { name: "Prospectos", href: "/sales/crm/leads" },
        ],
      },
      { name: "Reportes", href: "#" },
      { name: "Marketing", href: "#" },
      { name: "Control de cartera", href: "#" },
    ],
  },
  {
    name: "Servicios",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Automatizaciones", href: "#" },
      { name: "Embudos", href: "#" },
      { name: "Soporte a clientes - chats", href: "#" },
      { name: "Papelera", href: "#" },
      { name: "Logs", href: "#" },
      { name: "Academia", href: "#" },
    ],
  },
  {
    name: "Gestión de agentes",
    href: "#",
    icon: CalendarIcon,
    current: false,
    children: [
      { name: "Reclutamiento y selección", href: "#" },
      { name: "Capacitaciones", href: "#" },
      { name: "Conexiones", href: "#" },
      { name: "Desarrollo de agentes", href: "#" },
      { name: "E-Learning", href: "#" },
    ],
  },
  {
    name: "Compañías",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
    children: [
      { name: "AFIRME", href: "#" },
      { name: "ATLAS", href: "#" },
      { name: "AXXA", href: "#" },
      { name: "BANORTE", href: "#" },
      { name: "GNP", href: "#" },
      { name: "QUALITAS", href: "#" },
      { name: "ZURICH", href: "#" },
      { name: "OTRAS", href: "#" },
    ],
  },
  {
    name: "Ajustes y configuración",
    href: "#",
    icon: ChartPieIcon,
    current: false,
    children: [
      { name: "Permisos y accesos usuarios", href: "#" },
      { name: "Cambio de contraseña", href: "#" },
      { name: "Otros", href: "#" },
    ],
  },
];

export function onDismissModal(router, setOpenModal, duration = 500) {
  setOpenModal(false);
  console.log("Duration: ", duration);
  setTimeout(() => {
    router.back();
  }, duration);
}
