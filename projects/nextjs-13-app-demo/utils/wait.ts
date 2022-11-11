export function wait(seconds: number): Promise<void> {
  const delay = 1000 * seconds;
  return new Promise((res, _) => setTimeout(() => res(), delay));
}
