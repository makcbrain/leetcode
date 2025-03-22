/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
	const map = new Map();

	for (const letter of magazine) {
		map.set(letter, (map.get(letter) || 0) + 1);
	}

	for (const letter of ransomNote) {
		const count = map.get(letter);

		if (!count) {
			return false;
		}

		map.set(letter, count - 1);
	}

	return true;
};
