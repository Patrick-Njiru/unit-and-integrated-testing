import { validateNumber, validateStringNotEmpty } from "./validation"

export function transformToNumber(value) {
	if (!value) throw "No input provided!"
	if (typeof value !== "string") return NaN
	return +value
}

export const cleanNumbers = (numberValues) => {
	const numbers = []

	numberValues.forEach((numberInput) => {
		validateStringNotEmpty(numberInput)
		const number = transformToNumber(numberInput)
		validateNumber(number)
		numbers.push(number)
	})

	return numbers
}
