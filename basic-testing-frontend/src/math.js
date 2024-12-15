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

// this is our unit that we want to test.

// console.log('sum', add([1, 2, 3])) // 6
// console.log('sum', add(['1', '2', 3])) // 6
// console.log('sum', add(['1', '2', 'c])) // NaN
