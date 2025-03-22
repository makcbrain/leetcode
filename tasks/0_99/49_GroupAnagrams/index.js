/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
	const wordMap = new Map();

	for (str of strs) {
		const sortedStr = str.split('').sort().join('');

		if (!wordMap.has(sortedStr)) {
			wordMap.set(sortedStr, []);
		}

		wordMap.get(sortedStr).push(str);
	}

	return [...wordMap.values()];
};
