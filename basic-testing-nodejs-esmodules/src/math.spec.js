import { expect, it } from "vitest"
import { add } from "./math"

// This test is not perfect because it doesn't follow the AAA (Arrange, Act, Assert) pattern.
// it("should summarize all number values in an array", () => {
// 	const result = add([1, 2, 3])
// 	expect(result).toBe(6)
// })

// Here is a test that adheres to the AAA pattern
it("should summarize all number values in an array", () => {
	// Arrange -- Define the testing environment and values
	const numbers = [1, 2]
	const expectedResult = numbers.reduce((sum, number) => sum + number, 0)

	// Act -- Run the code/function that should be tested
	const result = add(numbers)

	// Assert -- Evaluate the result and compare it to the expected value
	expect(result).toEqual(expectedResult)
})

it("should yield NAN if at least one invalid number is provided", () => {
	// Arrange
	const numbers = [1, "invalid"]

	// Act
	const result = add(numbers)

	// Assert
	expect(result).toBeNaN()
})

it("should yield a correct result if an array of numerc string values is provided", () => {
	// Arrange
	const stringNumbers = ["1", "2"],
		expectedResult = stringNumbers.reduce((sum, currentValue) => sum + +currentValue, 0)

	// Act
	const result = add(stringNumbers)

	// Assert
	expect(result).toBe(expectedResult)
})

// Always aim to be thorough, covering all possible scenarios. This is an iterative process

it("yields 0 if an empty array is provided", () => {
	const numbers = []
	const result = add(numbers)
	expect(result).toEqual(0)
})

// Here's how to handle errors
it("should return an error if no value is passed into the function", () => {
	const resultFn = () => add()

	expect(resultFn).toThrow()
	// if you want to test if an error is not thrown: expect(resultFn).not.toThrow()
})

// This kind of error wouldn't be possible with TypeScript because TypeScript would now that this function takes a single argument
it("should throw an error if provided with multiple arguments instead of an array", () => {
	const num1 = 1,
		num2 = 2
	const resultFn = () => add(num1, num2)

	// Testing for the right errors to ensure that this error is thrown for the right reason
	expect(resultFn).toThrow(/is not iterable/)
})
