import {fibonacci} from "./index";

it("should return '1' for 1", () => {
    expect(fibonacci(1)).toBe(1);
});

it("should return null for -1", () => {
    expect(fibonacci(-1)).toBe(null);
});