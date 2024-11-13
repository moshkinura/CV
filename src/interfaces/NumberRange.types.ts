export type UEnumerate<
	N extends number,
	Acc extends number[] = [],
> = Acc['length'] extends N
	? Acc[number]
	: UEnumerate<N, [...Acc, Acc['length']]>;

export type UNumberRange<F extends number, T extends number> = Exclude<
	UEnumerate<T>,
	UEnumerate<F>
>;
