const codeA = 'a'.charCodeAt(0);
const codeZ = 'z'.charCodeAt(0);
const code0 = '0'.charCodeAt(0);
const code9 = '9'.charCodeAt(0);

const isAlphaNumeric = (value) => {
	const code = value.charCodeAt(0);

	return (code >= codeA && code <= codeZ) || (code >= code0 && code <= code9);
};
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
	let left = 0;
	let right = s.length - 1;

	while (left <= right) {
		const leftSymbol = s[left].toLowerCase();

		if (!isAlphaNumeric(leftSymbol)) {
			left++;
			continue;
		}

		const rightSymbol = s[right].toLowerCase();

		if (!isAlphaNumeric(rightSymbol)) {
			right--;
			continue;
		}

		if (leftSymbol !== rightSymbol) {
			return false;
		}

		left++;
		right--;
	}

	return true;
};
