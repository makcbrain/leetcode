/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const map = new Map();
	const map2 = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map2.set(nums[i], i);
		} else {
			map.set(nums[i], i);
		}
	}

	for (const num of map.keys()) {
		const secondNum = target - num;
		const mapToSearch = secondNum === num ? map2 : map;

		if (mapToSearch.has(secondNum)) {
			return [map.get(num), mapToSearch.get(secondNum)];
		}
	}

	return false;
};
