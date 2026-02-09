import { calculate } from "./calculator";

test("adds 10 and 2", () => {
  expect(calculate.add(10, 2)).toBe(12);
});

test("subtracts 10 by 2", () => {
  expect(calculate.subtract(10, 2)).toBe(8);
});

test("multiplies 10 by 2", () => {
  expect(calculate.multiply(10, 2)).toBe(20);
});

test("divides 10 by 2", () => {
  expect(calculate.divide(10, 2)).toBe(5);
});