/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
	const freq = new Array(citations.length + 1).fill(0);
	const lastIndex = freq.length - 1;

	for (let i = 0; i < citations.length; i++) {
		const citation = citations[i];

		if (citation < citations.length) {
			freq[citation]++;
		} else {
			freq[lastIndex]++;
		}
	}

	let acc = 0;

	for (let i = lastIndex; i >= 0; i--) {
		acc += freq[i];

		if (acc >= i) {
			return i;
		}
	}
};
