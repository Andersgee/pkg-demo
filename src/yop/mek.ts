export type Kek = {
	m: number;
};

export function mek(x: Kek) {
	return 4 * x.m;
}
