export const MONHTS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const useParseTimestamp = timestamp => {
  const date = new Date(timestamp);

  return {
    year: date.getFullYear(),
    month: MONHTS[date.getMonth()],
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};
