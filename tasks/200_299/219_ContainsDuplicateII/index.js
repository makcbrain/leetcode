/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i]) && Math.abs(i - map.get(nums[i])) <= k) {
			return true;
		} else {
			map.set(nums[i], i);
		}
	}

	return false;
};
