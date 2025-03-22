/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
	let prefix = strs[0];

	while (prefix) {
		const prevPrefix = prefix;
		for (let i = 1; i < strs.length; i++) {
			if (strs[i].slice(0, prefix.length) !== prefix) {
				prefix = prefix.slice(0, prefix.length - 1);
				break;
			}
		}

		if (prefix === prevPrefix) {
			return prefix;
		}
	}

	return '';
};
