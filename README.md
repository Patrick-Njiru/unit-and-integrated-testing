# Unit and Integration Tests Using Vitest

## Installation

```
npm install vitest ...

```

## 
## Basics

-   It is a recommended practice to adhere to the AAA pattern when writing tests

    ### AAA

    -   `AAA` stands for Arrange, Act, Assert.
    -   Arrange - Define the testing environment and values

        ```
        const numbers = [1, 2]
        const expectedResult = numbers.reduce((sum, number) => sum + number, 0)
        ```

    -   Act - Run the code/function that should be tested

        ```
        const result = add(numbers)
        ```

    -   Assert - Evaluate the result and compare it to the expected value
        ```
        expect(result).toBeNaN()
        ```

-   Always aim to be thorough, covering all possible scenarios. This is an iterative process. This can be an iterative process
-   When writing tests to handle errors, it is better to specify the kind of message that should be in the error to ensure the test does not fail when an unrelated error is encountered:

    `expect(resultFn).toThrow(/is not iterable/)` - this test will fail if the thrown error contains the woods 'is not iterable'. Otherwise, it will pass

-   Adding multiple expectations is not a common practice but there are scenarios where this is preferred like the one below:

```

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

```
##

## Test Suites

- test suites are used when you might have multiple tests in one file for different unit(functions) and need to be able to clearly distinguish them.
- In order to do this, we use the term `describe` which is imported from vitest.
- `describe` takes 2 arguments:
- The name of the unit/function being described
  - A function which contains all tests that are related to that unit.
- Here is an example of 2 test suites in the same file.
  
```
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

```
NB: You can even nest test suites for more complicated situations like when you have nested functions/units
