const map = {
	2: ['a', 'b', 'c'],
	3: ['d', 'e', 'f'],
	4: ['g', 'h', 'i'],
	5: ['j', 'k', 'l'],
	6: ['m', 'n', 'o'],
	7: ['p', 'q', 'r', 's'],
	8: ['t', 'u', 'v'],
	9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
	let result = [];

	for (const digit of digits) {
		const letters = map[digit];

		if (!result.length) {
			result = letters;
			continue;
		}

		result = result.flatMap((str) => letters.map((letter) => `${str}${letter}`));
	}

	return result;
};
