export function validateStringNotEmpty(value) {
	if (typeof value !== "string") {
		throw new Error("Invalid input - must be a string.")
	}
	if (value.trim().length === 0) {
		throw new Error("Invalid input - must not be empty.")
	}
}

export function validateNumber(number) {
	if (typeof number !== "number" || isNaN(number)) {
		throw new Error("Invalid number input.")
	}
}
