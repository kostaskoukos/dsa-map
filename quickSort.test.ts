import { test, expect } from "bun:test";

function partition(arr: number[], lo: number, hi: number): number {
  let l = lo - 1;

  const p = arr[hi];
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= p) {
      l++;
      const temp = arr[i];
      arr[i] = arr[l];
      arr[l] = temp;
    }
  }

  l++;
  const temp = arr[l];
  arr[l] = arr[hi];
  arr[hi] = temp;

  return l;
}

function quickSort(arr: number[], l?: number, r?: number) {
  l ??= 0;
  r ??= arr.length - 1;

  if (l >= r) return arr;

  const pivot = partition(arr, l, r);

  quickSort(arr, 0, pivot - 1);
  quickSort(arr, pivot + 1, r);

  return arr;
}

test("quick sort", () => {
  const arr1 = [-35, 420, -69, 69, -100, 0, 5, 8, 3, 0];
  const arr2 = [503, -69, -1000, 421, -9, 0, 503];

  expect(quickSort([3, 2, 1, 5])).toEqual([1, 2, 3, 5]);
  expect(quickSort(arr1)).toEqual([-100, -69, -35, 0, 0, 3, 5, 8, 69, 420]);
  expect(quickSort(arr2)).toEqual([-1000, -69, -9, 0, 421, 503, 503]);
});
