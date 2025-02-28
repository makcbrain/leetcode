/**
 * @param {number[]} heights
 * @return {number}
 */
const trap = (heights) => {
	if (heights.length <= 2) {
		return 0;
	}

	let leftIndex = 0;
	let rightIndex = heights.length - 1;
	let maxHeightLeft = 0;
	let maxHeightRight = 0;
	let maxWaterHeight = 0;
	let totalWater = 0;

	while (leftIndex < rightIndex) {
		const leftHeight = heights[leftIndex];
		const rightHeight = heights[rightIndex];
		maxHeightLeft = Math.max(maxHeightLeft, leftHeight);
		maxHeightRight = Math.max(maxHeightRight, rightHeight);
		maxWaterHeight = Math.min(maxHeightLeft, maxHeightRight);

		if (leftHeight > rightHeight) {
			totalWater += maxWaterHeight - rightHeight;
			rightIndex--;
		} else {
			totalWater += maxWaterHeight - leftHeight;
			leftIndex++;
		}
	}

	return totalWater;
};
