export function addCommission(
  amount: number,
  commission: number,
): number {
  return amount / (1 - commission / 100);
}

export function removeCommission(
  amount: number,
  commission: number,
): number {
  return amount * (1 - commission / 100);
}
