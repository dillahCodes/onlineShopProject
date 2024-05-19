import { differenceInYears, differenceInMonths, differenceInDays, parse } from "date-fns";

const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = parse(birthDate, "dd-MM-yyyy", new Date());

  const ageYears = differenceInYears(today, birth);
  const ageMonths = differenceInMonths(today, birth) % 12;
  const ageDays = differenceInDays(today, birth) % 30; // assuming 30 days per month

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
};

export default calculateAge;
