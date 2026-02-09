import { caesarCipher } from "./caesar-cipher";

test.skip("ABC test", () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});

test.skip("XYZ test", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test.skip("HeLLo test", () => {
  expect(caesarCipher("HeLLo", 5)).toBe("MjQQt");
});

test.skip("Hello, World! test", () => {
  expect(caesarCipher("Hello, World!", 2)).toBe("Jgnnq, Yqtnf!");
});