export const formatDate = (stringDate, format) => {
  const exp_date = new Date(stringDate);
  if (format === "hours")
    return `${exp_date.getHours()}:${exp_date.getMinutes()}0`;

  return `${exp_date.getDate()}-${
    exp_date.getMonth() + 1 < 10
      ? `0${exp_date.getMonth() + 1}`
      : exp_date.getMonth() + 1
  }-${exp_date.getFullYear()}`;
};
