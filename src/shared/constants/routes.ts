import HomeIcon from "../icons/home-icon";
import NotepadIcon from "../icons/notepad-icon";
import PreviewIcon from "../icons/preview-icon";

export const AdminNavBarRoutes = [
  {
    name: "Сайт",
    icon: HomeIcon,
    link: "/",
  },
  {
    name: "Записи",
    icon: NotepadIcon,
    link: "/admin/appointments",
  },
  {
    name: "Відгуки",
    icon: PreviewIcon,
    link: "/admin/reviews",
  },
];
