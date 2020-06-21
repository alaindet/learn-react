/**
 * Turns an array of objects into an object map (not a Map) for quick accessing.
 * The map key is taken from the object and defined by the user
 *
 * @param {array} array 
 * @param {string} key 
 */
const getMapFromArrayByKey = (array, key) => {
  const map = {};
  for (const item of array) {
    map[item[key]] = item;
  }
  return map;
};

export default {
  getMapFromArrayByKey,
};
