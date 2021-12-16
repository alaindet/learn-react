const pad = n => n.toString().padStart(2, '0');

const parsers = {
  y: d => d.getFullYear(),
  m: d => pad(d.getMonth() + 1),
  d: d => pad(d.getDate()),
  h: d => pad(d.getHours()),
  i: d => pad(d.getMinutes()),
  s: d => pad(d.getSeconds()),
};

export const formatDate = (format, timestamp) => {
  const d = timestamp ? new Date(timestamp) : new Date();
  return format
    .split('')
    .map(char => parsers[char] ? parsers[char](d) : char)
    .join('');
};
