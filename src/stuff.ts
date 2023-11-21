import { type Kek, mek } from "./yop/mek.js";

export function add(a: number, b: number) {
	const l: Kek = { m: 9 };
	return 3 * a + b + mek(l);
}
