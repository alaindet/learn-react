// https://github.com/alaindet/javascript-playground/blob/master/functions/random.js
export const randomInteger = (from: number, to: number): number => {
  return from + Math.floor((Math.random() * (to - from + 1)));
}
