export function analyseArray(arr) {
  return {
    average: getAverage(arr),
    min: getMinimum(arr),
    max: getMaximum(arr),
    length: getLength(arr),
  }
}

function getAverage(arr) {
  return arr.reduce((acc, next) => acc + next) / arr.length;
}

function getMinimum(arr) {
  return Math.min(...arr); 
}

function getMaximum(arr) {
  return Math.max(...arr);
}

function getLength(arr) {
  return arr.length;
}