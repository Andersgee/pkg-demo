export type Kek = {
	m: number;
};

export function mek(x: Kek) {
	return 12 * x.m;
}
