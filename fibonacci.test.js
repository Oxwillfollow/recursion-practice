import { fibonacci } from "./fibonacci";

test("n = 0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("n = 1", () => {
  expect(fibonacci(1)).toBe(1);
});

test("n = 2", () => {
  expect(fibonacci(2)).toBe(1);
});

test("n = 3", () => {
  expect(fibonacci(3)).toBe(2);
});

test("n = 11", () => {
  expect(fibonacci(11)).toBe(89);
});
