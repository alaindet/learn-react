export function compareAscending(a: string | number, b: string | number): number {
	return (a === b) ? 0 : (a < b ? -1 : 1);
}
