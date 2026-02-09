import { calculate } from "./calculator";

test.skip("adds 10 and 2", () => {
  expect(calculate.add(10, 2)).toBe(12);
});

test.skip("subtracts 10 by 2", () => {
  expect(calculate.subtract(10, 2)).toBe(8);
});

test.skip("multiplies 10 by 2", () => {
  expect(calculate.multiply(10, 2)).toBe(20);
});

test.skip("divides 10 by 2", () => {
  expect(calculate.divide(10, 2)).toBe(5);
});