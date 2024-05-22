export const scrollToAppointment = (id: string) => {
  const scrollToElement = document.getElementById(id);
  if (scrollToElement) {
    scrollToElement.scrollIntoView({ behavior: "smooth" });

  }
};
