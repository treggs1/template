/**
 *  @jest-environment jsdom
 */

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 70 for 42 + 28", () => {
            expect(addition(42, 28)).toBe(70);
        });
    });

    describe("Subtraction function", () => {

    });

    describe("Multiply function", () => {

    });

    describe("Division function", () => {

    });
})

https://github.com/Code-Institute-Solutions/Jest_Testing_Part1/tree/main/03_mocking