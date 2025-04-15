import { format, parseISO } from "date-fns";

export const getFormattedDate = (date: string | Date): string => {
  const safeDate = typeof date === "string" ? parseISO(date) : date;
  return format(safeDate, "MMMM dd, yyyy");
};
