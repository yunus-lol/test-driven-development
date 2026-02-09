import { caesarCipher } from "./caesar-cipher";

test("ABC test", () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});

test("XYZ test", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("HeLLo test", () => {
  expect(caesarCipher("HeLLo", 5)).toBe("MjQQt");
});

test("Hello, World! test", () => {
  expect(caesarCipher("Hello, World!", 2)).toBe("Jgnnq, Yqtnf!");
});