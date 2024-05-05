export default function getMonthAndYearFromDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}
