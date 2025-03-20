/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
	if (t.length > s.length) return '';

	const tCount = new Map();

	for (const char of t) {
		tCount.set(char, (tCount.get(char) || 0) + 1);
	}

	let left = 0;
	let right = 0;
	const required = tCount.size;
	let formed = 0;
	const windowCounts = new Map();

	let minLength = Infinity;
	let minLeft = 0;

	while (right < s.length) {
		const char = s[right];

		windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

		if (tCount.has(char) && windowCounts.get(char) === tCount.get(char)) {
			formed++;
		}

		while (left <= right && formed === required) {
			const currentLength = right - left + 1;

			if (currentLength < minLength) {
				minLength = currentLength;
				minLeft = left;
			}

			const leftChar = s[left];
			windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

			if (tCount.has(leftChar) && windowCounts.get(leftChar) < tCount.get(leftChar)) {
				formed--;
			}

			left++;
		}

		right++;
	}

	return minLength === Infinity ? '' : s.substring(minLeft, minLeft + minLength);
};
