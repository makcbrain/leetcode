/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
	const words = s.split(' ');

	if (words.length !== pattern.length) {
		return false;
	}

	const letterToWordMap = new Map();
	const mappedWords = new Set();

	for (let i = 0; i < pattern.length; i++) {
		if (letterToWordMap.has(pattern[i])) {
			if (letterToWordMap.get(pattern[i]) !== words[i]) {
				return false;
			}
		} else {
			if (mappedWords.has(words[i])) {
				return false;
			}

			letterToWordMap.set(pattern[i], words[i]);
			mappedWords.add(words[i]);
		}
	}

	return true;
};
