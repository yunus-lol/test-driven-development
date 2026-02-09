import { capitalise } from "./capitalise";

test("capitalises `hello`", () => {
  expect(capitalise("hello")).toBe("Hello");
});

test("capitalises `apple`", () => {
  expect(capitalise("apple")).toBe("Apple");
});

test("capitalises `banana`", () => {
  expect(capitalise("banana")).toBe("Banana");
});

test("capitalises `fruits are cool`", () => {
  expect(capitalise("fruits are cool")).toBe("Fruits are cool");
});