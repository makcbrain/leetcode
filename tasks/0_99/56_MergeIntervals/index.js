/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
	const sortedIntervals = intervals.sort((a, b) => {
		return a[0] - b[0];
	});

	const result = [sortedIntervals[0]];

	for (let i = 1; i < sortedIntervals.length; i++) {
		const lastInterval = result.at(-1);
		const currentInterval = sortedIntervals[i];

		if (currentInterval[0] <= lastInterval[1]) {
			lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
		} else {
			result.push(currentInterval);
		}
	}

	return result;
};
