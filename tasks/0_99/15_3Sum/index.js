/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
	nums.sort((a, b) => a - b);

	const res = [];

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i - 1] === nums[i]) {
			continue;
		}

		if (nums[i] > 0) {
			break;
		}

		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];

			if (sum === 0) {
				res.push([nums[i], nums[left], nums[right]]);

				while (nums[right - 1] === nums[right]) {
					right--;
				}
				while (nums[left + 1] === nums[left]) {
					left++;
				}

				right--;
				left++;
			} else if (sum > 0) {
				right--;
			} else {
				left++;
			}
		}
	}

	return res;
};
