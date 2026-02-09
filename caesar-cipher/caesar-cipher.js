export function caesarCipher(string, shift) {
  let message = "";
  const split = string.split("");
  for (let x = 0; x < split.length; x++) {
    if (isAlpha(split[x]) && split[x] >= "a" && split[x] <= "z") {
      message += convertLowerCaseLetter(split[x], shift);
    } else if (isAlpha(split[x]) && split[x] >= "A" && split[x] <= "Z") {
      message += convertUpperCaseLetter(split[x], shift);
    } else {
      message += split[x]
    }
  }

  return message;
}

function convertUpperCaseLetter(letter, shift) {
  const unicodeValue = letter.charCodeAt(0);
  const shiftedValue = (((unicodeValue - 65) + shift) % 26) + 65;
  const value = String.fromCharCode(shiftedValue);

  return value;
}

function convertLowerCaseLetter(letter, shift) {
  const unicodeValue = letter.charCodeAt(0);
  const shiftedValue = (((unicodeValue - 97) + shift) % 26) + 97;
  const value = String.fromCharCode(shiftedValue);

  return value;
}

function isAlpha(letter) {
  return typeof letter === "string" && letter.length === 1 && (letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z")
}