/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
	if (nums.length < 2) {
		return nums.length;
	}

	let i = 0;
	let j = 1;

	while (j < nums.length) {
		while (nums[i] === nums[j]) {
			j++;
		}

		if (j < nums.length) {
			i++;
			nums[i] = nums[j];
			j++;
		}
	}

	return i + 1;
};
