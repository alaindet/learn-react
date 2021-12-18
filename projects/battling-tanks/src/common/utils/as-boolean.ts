export const asBoolean = (val: string | boolean | undefined | null): boolean => {
	return !!val || val === '';
}
