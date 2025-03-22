/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
	const stack = [];

	for (const token of tokens) {
		const number = parseInt(token);

		if (isNaN(number)) {
			const a = stack.at(-2);
			const b = stack.at(-1);
			stack.splice(-2);
			let result;

			if (token === '+') {
				result = a + b;
			} else if (token === '-') {
				result = a - b;
			} else if (token === '*') {
				result = a * b;
			} else if (token === '/') {
				result = divide(a, b);
			}

			stack.push(result);
		} else {
			stack.push(number);
		}
	}

	return stack.at(-1);
};

function divide(a, b) {
	const result = a / b;

	if (result > 0) {
		return Math.floor(result);
	} else {
		return Math.ceil(result);
	}
}
