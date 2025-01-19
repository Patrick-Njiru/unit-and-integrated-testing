import { describe, expect, it } from "vitest"
import { generateResultText } from "./output"

describe("generateResultText()", () => {
	it("should return a string no matter what value is passed in", () => {
		const val1 = 1,
			val2 = "Invalid",
			val3 = true,
			val4 = NaN,
			val5 = null,
			val6 = undefined

		const result1 = generateResultText(val1)
		const result2 = generateResultText(val2)
		const result3 = generateResultText(val3)
		const result4 = generateResultText(val4)
		const result5 = generateResultText(val5)
		const result6 = generateResultText(val6)

		expect(result1).toBeTypeOf("string")
		expect(result2).toBeTypeOf("string")
		expect(result3).toBeTypeOf("string")
		expect(result4).toBeTypeOf("string")
		expect(result5).toBeTypeOf("string")
		expect(result6).toBeTypeOf("string")
	})
})

describe("outputResult()", () => {
	it("", () => {
		// Ar
	})
})
