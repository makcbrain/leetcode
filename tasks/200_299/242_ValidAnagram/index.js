/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
	if (s.length !== t.length) {
		return false;
	}

	const sMap = new Map();

	for (const letter of s) {
		sMap.set(letter, (sMap.get(letter) || 0) + 1);
	}

	for (const letter of t) {
		const numberOfLetter = sMap.get(letter);

		if (!numberOfLetter) {
			return false;
		}

		sMap.set(letter, numberOfLetter - 1);
	}

	return true;
};
