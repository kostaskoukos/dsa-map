import { test, expect } from "bun:test";

function binarySearch(arr: number[], needle: number): boolean {
	let l = 0;
	let r = arr.length - 1;

	while (l <= r) {
		const m = Math.floor(l + (r - l) / 2);

		if (needle == arr[m]) return true;
		else if (needle < arr[m]) r = m - 1;
		else l = m + 1;
	}
	return false;
}

test("Binary search", () => {
	const arr = [
		-420, -342, 69, -3, 0, 0, 1, 4, 9, 53, 69, 420, 10001, 12345, 696969,
	];

	expect(binarySearch(arr, 809)).toBe(false);
	expect(binarySearch(arr, -5000)).toBe(false);
	expect(binarySearch(arr, 0)).toBe(true);
	expect(binarySearch(arr, -420)).toBe(true);
	expect(binarySearch(arr, 696969)).toBe(true);
	expect(binarySearch(arr, 10000)).toBe(false);
	expect(binarySearch(arr, 9)).toBe(true);
});
