import { test, expect } from "bun:test";

function linearSearch(arr: number[], needle: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == needle) return true;
  }
  return false;
}

test("Linear search", () => {
  const arr = [0, 1, 2, 4, 69, 420, 42, 789, -432, -69, -1, 0];

  expect(linearSearch(arr, 3)).toBe(false)
  expect(linearSearch(arr, 0)).toBe(true)
  expect(linearSearch(arr, 420)).toBe(true)
  expect(linearSearch(arr, -1)).toBe(true)
  expect(linearSearch(arr, -789999)).toBe(false)
});
