import { reverseString } from "./reverse-string";

skip.test("reverses `hello`", () => {
  expect(reverseString("hello")).toBe("olleh");
});

skip.test("reverses `apple`", () => {
  expect(reverseString("apple")).toBe("elppa");
});

skip.test("reverses `banana`", () => {
  expect(reverseString("banana")).toBe("ananab");
});

skip.test("reverses `fruits are cool`", () => {
  expect(reverseString("fruits are cool")).toBe("looc era stiurf");
});