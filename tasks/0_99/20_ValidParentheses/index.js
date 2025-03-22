const pairs = {
	'(': ')',
	'{': '}',
	'[': ']',
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	const stack = [];

	for (const symbol of s) {
		if (pairs[symbol]) {
			stack.push(symbol);
		} else {
			const expectedSymbol = pairs[stack.pop()];

			if (symbol !== expectedSymbol) {
				return false;
			}
		}
	}

	return stack.length === 0;
};
