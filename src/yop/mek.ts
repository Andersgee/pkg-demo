export type Kek = {
	m: number;
};

export function mek(x: Kek) {
	return 5 * x.m;
}
