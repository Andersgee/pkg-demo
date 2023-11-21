export type Kek = {
	m: number;
};

export function mek(x: Kek) {
	return 122 * x.m;
}
