/**
 * @param {string} str
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (str, words) => {
	const result = [];
	const wordLength = words[0].length;
	const wordsLength = wordLength * words.length;

	const wordMap = {};
	for (const word of words) {
		wordMap[word] = (wordMap[word] || 0) + 1;
	}

	const maxLeft = str.length - wordsLength;

	for (let start = 0; start < wordLength; start++) {
		let left = start;
		let right = start;
		let seen = {};

		while (left <= maxLeft) {
			const word = str.slice(right, right + wordLength);
			right += wordLength;

			if (wordMap[word]) {
				seen[word] = (seen[word] || 0) + 1;

				while (seen[word] > wordMap[word]) {
					const leftWord = str.slice(left, left + wordLength);
					seen[leftWord]--;
					left += wordLength;
				}

				if (right - left === wordsLength) {
					result.push(left);
					const leftWord = str.slice(left, left + wordLength);
					seen[leftWord]--;
					left += wordLength;
				}
			} else {
				seen = {};
				left = right;
			}
		}
	}

	return result;
};
