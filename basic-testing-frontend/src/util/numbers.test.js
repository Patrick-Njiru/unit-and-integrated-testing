import { describe, expect, it } from "vitest"
import { cleanNumbers, transformToNumber } from "./numbers"

describe("transformToNumber()", () => {
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

		// this test will fail/pass if the thrown error contains the woods 'No input provided'
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
})

describe("cleanNumbers()", () => {
	it("Should return an array of number values if an array of string number values is provided", () => {
		const numberValues = ["1", "2"]
		const result = cleanNumbers(numberValues)

		// Using toBe will result in an error because these 2 arrays are reference as different objects.
		// toEqual does a deep comparison, comparing the individual values instead of the object references
		expect(result).toEqual([1, 2])
	})

	it("Should throw an error if an array with at least one non-number string is provided", () => {
		const inputArray = ["1", "b"]
		const result = () => cleanNumbers(inputArray)
		expect(result).toThrow()
	})

	it("Should throw an error if an array with at least one empty string is provided", () => {
		const inputArray = ["1", ""]
		const result = () => cleanNumbers(inputArray)
		expect(result).toThrow()
	})

	// it("Should throw an error if an empty array is provided", () => {
	// 	const emptyArray = []
	// 	const result = () => cleanNumbers(emptyArray)
	// 	expect(result).toThrow()
	// })
})
