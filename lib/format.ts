export const capitalize = (str: string) => {
  if (!str) return "";

  if (str.length === 1) return str.toUpperCase();

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatDateToLocaleString = (date: Date | string) => {
  if (!date) return "";

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date");
  }

  return parsedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
