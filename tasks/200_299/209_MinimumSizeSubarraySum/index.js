/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
	let sum = 0;
	let startIndex = 0;
	let minLength = Infinity;

	for (let endIndex = 0; endIndex < nums.length; endIndex++) {
		sum += nums[endIndex];

		while (sum >= target) {
			minLength = Math.min(minLength, endIndex - startIndex + 1);
			sum -= nums[startIndex];
			startIndex++;
		}
	}

	return minLength === Infinity ? 0 : minLength;
};
