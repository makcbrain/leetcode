/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
	let endWordIndex;

	for (let i = s.length - 1; i >= 0; i--) {
		const symbol = s[i];

		if (!endWordIndex) {
			if (symbol === ' ') {
				continue;
			}

			endWordIndex = i + 1;
		}

		if (endWordIndex) {
			if (symbol === ' ') {
				return endWordIndex - i - 1;
			}

			if (i === 0) {
				return endWordIndex - i;
			}
		}
	}
};
