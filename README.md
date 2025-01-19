# Unit and Integration Tests Using Vitest

## Installation & Setup

```
npm install vitest ...

```

<br/>

## Testing Basics

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

<br/>

## Test Suites

-   test suites are used when you might have multiple tests in one file for different unit(functions) and need to be able to clearly distinguish them.
-   In order to do this, we use the term `describe` which is imported from vitest.
-   `describe` takes 2 arguments:
-   The name of the unit/function being described
    -   A function which contains all tests that are related to that unit.
-   Here is an example of 2 test suites in the same file.

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

<br/>

## Writing Good Tests

-   Not everything needs to be tested.
-   You should only test your code and do not test:

    i. Code from third party packages/libraries/frameworks/apis e.g fetch() api

    ii. Code that's built into the environment you are in. e.g document.GetElementsByTagName()

-   Your test should only test one thing. One expected behaviour/result of one unit/function.
-   Keep your tests simple/basic and focus on the essence of what you are testing. Avoid using complicated test cases
-   Keep your number of assertions ('expects') low.

### Only Test One Thing

-   Try to be as granular as possible.
-   For example, to validate an input string you can create separate tests for the following scenarios:
    1. Input is empty
    2. Input has enough strings characters

### Code Coverage

-   Write tests for the majority of your code to achieve good coverage.
-   There are some parts of the code that you don't need to test like units that incorporates/calls other functions that have already been tested.
-   You can use tools like <a href="https://vitest.dev/guide/features.html#coverage">https://vitest.dev/guide/features.html#coverage</a> to measure the coverage.


## Integration Tests
- Integration tests are written when you need to test a function that uses other functions to achieve some result. Here is an example of such a function:
  ```
    const cleanNumbers = (numberValues) => {
      const numbers = []

      numberValues.forEach((numberInput) => {
        validateStringNotEmpty(numberInput)
        const number = transformToNumber(numberInput)
        validateNumber(number)
        numbers.push(number)
      })

      return numbers
    }
  ```
- In the above case, validateStringNotEmpty, transformToNumber and validateNumber are other functions/units called inside our main one.

 - `NOTE`: Integration tests are important because you can write good unit tests for the individual functions but fail to achieve the desired behavior due to improper integration in the main function - like calling the validation functions in the wrong order or passing them the wrong arguments.