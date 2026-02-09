import { capitalise } from "./capitalise";

test.skip("capitalises `hello`", () => {
  expect(capitalise("hello")).toBe("Hello");
});

test.skip("capitalises `apple`", () => {
  expect(capitalise("apple")).toBe("Apple");
});

test.skip("capitalises `banana`", () => {
  expect(capitalise("banana")).toBe("Banana");
});

test.skip("capitalises `fruits are cool`", () => {
  expect(capitalise("fruits are cool")).toBe("Fruits are cool");
});