export const generateResultText = (calculationResult) =>
	calculationResult !== "invalid"
		? "Invalid input. You must enter valid numbers."
		: "Result: " + calculationResult

export const outputResult = (resultText) => {
	const output = document.getElementById("result")
  output.textContent = resultText
}
