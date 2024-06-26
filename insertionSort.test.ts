import { test, expect } from "bun:test";

function insertionSort(arr: number[]): number[] {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
			const temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
	return arr;
}

test("Insertion sort", () => {
	const arr1 = [-35, 420, -69, 69, -100, 0, 5, 8, 3, 0];
	const arr2 = [503, -69, -1000, 421, -9, 0, 503];

	expect(insertionSort([3, 2, 1, 5])).toEqual([1, 2, 3, 5]);
	expect(insertionSort(arr1)).toEqual([-100, -69, -35, 0, 0, 3, 5, 8, 69, 420]);
	expect(insertionSort(arr2)).toEqual([-1000, -69, -9, 0, 421, 503, 503]);
});
