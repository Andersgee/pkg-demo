export type Kek = {
	m: number;
};

export function mek(x: Kek) {
	return 3 * x.m;
}
