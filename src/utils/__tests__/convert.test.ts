import { convertInchesToCm } from "../convertion";
import { convertLbsToKg } from "../convertion";

const inchesTest = [
    [1, "2.54"],
    [2, "5.08"],
    [10, "25.40"],
    [100, "254.00"]
]

const lbsTest = [
    [1, '0.45'],
    [2, '0.91'],
    [10, '4.54'],
    [100, '45.36']
]

describe("convertions inches to cm", () => {
    it.each(inchesTest)("should convert %s inches to %s cm", (inches, expected) => {
        expect(convertInchesToCm(Number(inches))).toBe(expected);
    })
});

describe("convertions lbs to kg", () => {
    it.each(lbsTest)("should convert %s lbs to %s kg", (inches, expected) => {
        expect(convertLbsToKg(Number(inches))).toBe(expected);
    })
})