export const calculateExperience = (startYear: number, startMonth: number): string => {
  const startDate = new Date(startYear, startMonth - 1); // Months are 0-based in JS
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return months === 0 ? `${years} years` : `${years}.${months} years`;
};
