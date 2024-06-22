import { test, expect } from "bun:test";

function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

test("Bubble sort", () => {
  const arr1 = [-35, 420, -69, 69, -100, 0, 5, 8, 3, 0];
  const arr2 = [503, -69, -1000, 421, -9, 0, 503];

  bubbleSort(arr1);
  expect(arr1).toEqual([-100, -69, -35, 0, 0, 3, 5, 8, 69, 420]);

  bubbleSort(arr2);
  expect(arr2).toEqual([-1000, -69, -9, 0, 421, 503, 503]);
});
