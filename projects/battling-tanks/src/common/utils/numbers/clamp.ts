export const clamp = (n: any, from: number, to: number): number | null => {
  if (typeof n !== 'number') {
    return null;
  }

  if (n < from) {
    return from;
  }

  if (n > to) {
    return to;
  }

  return n;
};
