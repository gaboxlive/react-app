import { capitalize } from "../capitalize";

describe("capitalize", () => {
    it("should capitalize", () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    it("shour return empty if empty string is passed", () => {
        expect(capitalize('')).toBe('');
    });
    it("should return the same string if first is already capitalized", () => {
        expect(capitalize('Hello')).toBe('Hello');
    });
    it("should capitalize the first letter of a sentence", () => {
        expect(capitalize("hello world")).toBe('Hello world')
    });
})