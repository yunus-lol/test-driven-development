import { reverseString } from "./reverse-string";

test.skip("reverses `hello`", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test.skip("reverses `apple`", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test.skip("reverses `banana`", () => {
  expect(reverseString("banana")).toBe("ananab");
});

test.skip("reverses `fruits are cool`", () => {
  expect(reverseString("fruits are cool")).toBe("looc era stiurf");
});