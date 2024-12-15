import { describe, expect, test } from "vitest"
import { validateNumber, validateStringNotEmpty } from "./validation"

// Test Suites help in a scenario like this where a component/file has more than one unit that you are testing for. We use 'describe' for this

// You can event nest test suites for more complicated situations like when you have nested functions/units

// Test Suite 1
describe("validateStringNotEmpty()", () => {
	test("should throw an error if the input is not a string", () => {
		// Arrange
		const input = 123,
			input2 = [],
			input3 = {},
			input4 = true,
			input5 = undefined,
			input6 = null
		// Act
		const validationFn = () => validateStringNotEmpty(input),
			validationFn2 = () => validateStringNotEmpty(input2),
			validationFn3 = () => validateStringNotEmpty(input3),
			validationFn4 = () => validateStringNotEmpty(input4),
			validationFn5 = () => validateStringNotEmpty(input5),
			validationFn6 = () => validateStringNotEmpty(input6)
		// Assert
		expect(validationFn).toThrow(/must be a string/)
		expect(validationFn2).toThrow(/must be a string/)
		expect(validationFn3).toThrow(/must be a string/)
		expect(validationFn4).toThrow(/must be a string/)
		expect(validationFn5).toThrow(/must be a string/)
		expect(validationFn6).toThrow(/must be a string/)
	})

	test("should throw error if input is empty", () => {
		const input = "  "
		const validationFn = () => validateStringNotEmpty(input)
		expect(validationFn).toThrow(/must not be empty/)
	})

	test("should not throw an error if a non-empty string is provided", () => {
		const input = "valid string"
		const validationFn = () => validateStringNotEmpty(input)
		expect(validationFn).not.toThrow()
	})
})

// Test Suite 2
describe("validateNumber()", () => {
	test("should throw an error if input is not a number", () => {
		const input = "1"
		const validationFn = () => validateNumber(input)
		expect(validationFn).toThrow(/Invalid number input/)
	})

	test("should not throw an error if a number is provided", () => {
		const input = 123
		const validationFn = () => validateNumber(input)
		expect(validationFn).not.toThrow()
	})
})
