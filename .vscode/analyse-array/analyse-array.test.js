import { analyseArray } from "./analyse-array";

test("array 1", () => {
  expect(analyseArray([1, 2, 3])).toStrictEqual(
    {
      average: 2,
      min: 1,
      max: 3,
      length: 3
    }
  )
})

test("array 1", () => {
  expect(analyseArray([10, 12, 14])).toStrictEqual(
    {
      average: 12,
      min: 10,
      max: 14,
      length: 3
    }
  )
})