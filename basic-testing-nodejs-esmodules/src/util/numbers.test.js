import { expect, it } from "vitest"
import { transformToNumber } from "./numbers"

it("should transform a string number to a number of type number", () => {
	const input = "1",
		result = transformToNumber(input)

	expect(result).toBe(+input)
})

it("should return a negative result if the input is negative", () => {
	const input = "-4",
		result = transformToNumber(input)
	expect(result).toBe(-4)
})

it("should throw an error if no input is provided", () => {
	const result = () => transformToNumber()

	// this test will fail/pass if the thrown error contains the woords 'No input provided'
	expect(result).toThrow(/No input provided/)
})

// Multiple Expectations may be preferred in certain cases
// The test below ensures that only numeric strings are considered valid input. No arrays or objects
it("should yield NaN for non-transformable inputs", () => {
	const input1 = "invalid",
		input2 = {},
		input3 = []
	const result1 = transformToNumber(input1),
		result2 = transformToNumber(input2),
		result3 = transformToNumber(input3)

	expect(result1).toBeNaN()
	expect(result2).toBeNaN()
	expect(result3).toBeNaN()
})
