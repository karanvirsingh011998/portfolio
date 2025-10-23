export const calculateExperience = (startYear: number, startMonth: number): string => {
  const startDate = new Date(startYear, startMonth - 1); // Months are 0-based
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Handle pluralization and formatting
  if (years <= 0 && months > 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  } else if (years > 0 && months === 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  } else if (years > 0 && months > 0) {
    return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
  } else {
    return "Less than a month";
  }
};

