const truncate = (text, length) => {

  if (text.length >= length) {
    return text.substring(0, length) + '...';
  }

  return text;
};

const capitalize = (text) => {
  return text[0].toUpperCase() + text.substring(1);
};

export default {
  truncate,
  capitalize,
};
