/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
	const map = {};
	const mapReversed = {};

	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			if (map[s[i]] !== t[i]) {
				return false;
			}
		} else {
			if (mapReversed[t[i]]) {
				return false;
			}

			map[s[i]] = t[i];
			mapReversed[t[i]] = s[i];
		}
	}

	return true;
};
