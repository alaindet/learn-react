export const formatAsDate = (timestamp) => {
  const d = new Date(timestamp);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${year}-${month}-${day}`;
};
