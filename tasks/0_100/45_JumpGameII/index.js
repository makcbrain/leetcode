/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
	let jumps = 0;
	let farthestIndex = 0;
	let currentJumpMaxIndex = 0;
	const finishIndex = nums.length - 1;

	for (let i = 0; i < finishIndex; i++) {
		farthestIndex = Math.max(farthestIndex, i + nums[i]);

		if (i === currentJumpMaxIndex) {
			currentJumpMaxIndex = farthestIndex;
			jumps++;

			if (currentJumpMaxIndex >= finishIndex) {
				return jumps;
			}
		}
	}

	return jumps;
};
