import { format } from "date-fns";
import { uk } from "date-fns/locale";

export const scrollToAppointment = (id: string) => {
  const scrollToElement = document.getElementById(id);
  if (scrollToElement) {
    scrollToElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  return format(date, "d MMMM yyyy", { locale: uk });
};
