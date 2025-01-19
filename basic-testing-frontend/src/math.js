import { cleanNumbers, transformToNumber } from "./util/numbers"
import { validateNumber, validateStringNotEmpty } from "./util/validation"

export function add(numbers) {
	if (!numbers) {
		throw new Error("no value provided")
	} else {
		let sum = 0
		for (const number of numbers) {
			// add the + before 'number' to convert numeric strings to numbers and also result in NaN if one of the values is a non-numeric string
			sum += +number

			//alternative
			// sum += Number(number)
		}
		return sum
	}
}

export const calculateResult = (numberValues) => {
	let result = ""

	try {
		const cleanedNumbers = cleanNumbers(numberValues)
		result = add(cleanedNumbers).toString()
	} catch (error) {
		result = error.message
	}

	return result
}

// this is our unit that we want to test.

// console.log('sum', add([1, 2, 3])) // 6
// console.log('sum', add(['1', '2', 3])) // 6
// console.log('sum', add(['1', '2', 'c])) // NaN
