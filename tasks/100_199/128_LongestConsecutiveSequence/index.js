/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
	const set = new Set(nums);
	let res = 0;

	for (const num of set) {
		let seqLength = 1;
		let leftNum = num - 1;
		let rightNum = num + 1;

		while (set.has(leftNum)) {
			set.delete(leftNum);
			leftNum--;
			seqLength++;
		}

		while (set.has(rightNum)) {
			set.delete(rightNum);
			rightNum++;
			seqLength++;
		}

		if (seqLength > res) {
			res = seqLength;
		}
	}

	return res;
};
