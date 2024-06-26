import { test, expect } from "bun:test";

function merge(arr1: number[], arr2: number[]): number[] {
	let i = 0;
	let j = 0;
	const res: number[] = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			res.push(arr1[i]);
			i++;
		} else {
			res.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		res.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		res.push(arr2[j]);
		j++;
	}
	return res;
}

function mergeSort(arr: number[]): number[] {
	if (arr.length == 1) return arr;

	const m = Math.floor(arr.length / 2);

	return merge(mergeSort(arr.slice(0, m)), mergeSort(arr.slice(m)));
}

test("Merge sort", () => {
	const arr1 = [-35, 420, -69, 69, -100, 0, 5, 8, 3, 0];
	const arr2 = [503, -69, -1000, 421, -9, 0, 503];

	expect(mergeSort([3, 2, 1, 5])).toEqual([1, 2, 3, 5]);
	expect(mergeSort(arr1)).toEqual([-100, -69, -35, 0, 0, 3, 5, 8, 69, 420]);
	expect(mergeSort(arr2)).toEqual([-1000, -69, -9, 0, 421, 503, 503]);
});
