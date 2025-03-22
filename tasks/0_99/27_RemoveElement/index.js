/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
	let i = 0;
	let j = nums.length - 1;

	while (i <= j) {
		if (nums[i] === val && nums[j] === val) {
			j--;
		} else if (nums[i] === val) {
			nums[i] = nums[j];
			i++;
			j--;
		} else if (nums[j] === val) {
			j--;
		} else {
			i++;
		}
	}

	return j + 1;
};
