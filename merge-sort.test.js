import { mergeSort } from "./merge-sort";

test("Empty array", () => {
  expect(mergeSort([])).toEqual([]);
});

test("2 items", () => {
  expect(mergeSort([4, 1])).toEqual([1, 4]);
});

test("5 items", () => {
  expect(mergeSort([4, 1, 5, 2, 7])).toEqual([1, 2, 4, 5, 7]);
});

test("Doesn't mutate input array", () => {
  const originalArr = [1, 3, 2];
  const inputArr = [...originalArr];

  mergeSort(inputArr);
  expect(originalArr).toStrictEqual(inputArr);
});
