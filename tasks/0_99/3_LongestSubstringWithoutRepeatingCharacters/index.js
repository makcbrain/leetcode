/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	if (s.length < 2) {
		return s.length;
	}

	let res = 0;
	const symbolMap = new Map();

	for (let i = 0; i < s.length; i++) {
		if (symbolMap.has(s[i])) {
			res = Math.max(res, symbolMap.size);

			for (const [symbol, index] of symbolMap) {
				symbolMap.delete(symbol);

				if (symbol === s[i]) {
					break;
				}
			}
		}

		symbolMap.set(s[i], i);
	}

	return Math.max(res, symbolMap.size);
};
