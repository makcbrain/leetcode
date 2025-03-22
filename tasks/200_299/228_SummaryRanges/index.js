/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
	if (nums.length < 1) {
		return [];
	}

	const result = [];

	let start = nums[0];
	let end = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== end + 1) {
			result.push(start === end ? String(start) : `${start}->${end}`);
			start = nums[i];
			end = nums[i];
		} else {
			end = nums[i];
		}
	}

	result.push(start === end ? String(start) : `${start}->${end}`);

	return result;
};
