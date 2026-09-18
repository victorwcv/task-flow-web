export const formatTaskDate = (date: Date) => {
  const formattedDate = new Intl.DateTimeFormat("es-PE", {
    day: "numeric",
    month: "short",
  }).format(date);

  const formattedTime = new Intl.DateTimeFormat("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return `${formattedDate} · ${formattedTime}`;
};
