const _range = (from: number, to: number) => {
	const result = [];
	for (let i = from; i <= to; i++) {
		result.push(i);
	}
	return result;
}

export const range = (fromOrTo = 0, to?: number): number[] => {
	return (typeof to === 'undefined')
		? _range(0, fromOrTo)
		: _range(fromOrTo, to);
}
