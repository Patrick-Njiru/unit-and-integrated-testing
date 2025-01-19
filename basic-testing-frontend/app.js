import { calculateResult } from "./src/math.js"
import { extractEnteredNumberValues } from "../basic-testing-nodejs/src/parser.js"
import { generateResultText, outputResult } from "./src/output.js"

const form = document.querySelector("form")
const output = document.getElementById("result")

// this cannot be our unit because it has other functions(units) that are being called inside it.
// Avoid complex functions and always aim to split them into smaller functions and call the other functions inside the main one.

function formSubmitHandler(event) {
	event.preventDefault()

	const numberInputs = extractEnteredNumberValues(form)
	const result = calculateResult(numberInputs)
	const resultText = generateResultText(result)

	outputResult(resultText)
}

form.addEventListener("submit", formSubmitHandler)
