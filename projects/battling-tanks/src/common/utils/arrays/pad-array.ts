export const padArray = <T = any>(arr: T[], length: number, padValue: T): T[] => {
  if (arr.length >= length) {
    return arr;
  }
  const newArr = [...arr];
  let i = length - arr.length;
  while (i--) {
    newArr.push(padValue);
  }
  return newArr;
};
