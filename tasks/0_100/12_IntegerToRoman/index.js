const romanMap = new Map([
	['M', 1000],
	['CM', 900],
	['D', 500],
	['CD', 400],
	['C', 100],
	['XC', 90],
	['L', 50],
	['XL', 40],
	['X', 10],
	['IX', 9],
	['V', 5],
	['IV', 4],
	['I', 1],
]);

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
	let result = '';

	for (const [roman, val] of romanMap.entries()) {
		while (num - val >= 0) {
			result += roman;
			num -= val;
		}
	}

	return result;
};
