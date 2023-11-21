export type Kek = {
	m: number;
};

export function mek(x: Kek) {
	return 9 * x.m;
}
