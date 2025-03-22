/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
	if (intervals.length < 1) {
		return [newInterval];
	} else if (newInterval[1] < intervals[0][0]) {
		return [newInterval, ...intervals];
	} else if (newInterval[0] > intervals.at(-1)[1]) {
		intervals.push(newInterval);
		return intervals;
	}

	const result = [];
	let i = 0;
	let startNewInterval = newInterval[0];
	let endNewInterval = newInterval[1];
	let isNewIntervalInserted = false;

	while (i < intervals.length) {
		const startInterval = intervals[i][0];
		const endInterval = intervals[i][1];

		if (!isNewIntervalInserted && endNewInterval < startInterval) {
			result.push([startNewInterval, endNewInterval]);
			isNewIntervalInserted = true;
			continue;
		}

		if (isNewIntervalInserted || startNewInterval > endInterval) {
			result.push(intervals[i]);
			i++;
			continue;
		}

		if (startNewInterval >= startInterval && startNewInterval <= endInterval) {
			startNewInterval = startInterval;
		}

		if (endNewInterval >= startInterval && endNewInterval <= endInterval) {
			endNewInterval = endInterval;
		}

		i++;
	}

	if (!isNewIntervalInserted) {
		result.push([startNewInterval, endNewInterval]);
	}

	return result;
};
