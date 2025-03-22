function removeDuplicates(nums: number[]): number {
	let indexForReplace: number | null = null;
	let lastNumber = nums[0];
	let countOfLastNumber = 1;

	for (let index = 1; index < nums.length; index++) {
		const currentNumber = nums[index];

		if (currentNumber === lastNumber) {
			countOfLastNumber++;
		} else {
			lastNumber = currentNumber;
			countOfLastNumber = 1;
		}

		if (indexForReplace === null && countOfLastNumber === 3) {
			indexForReplace = index;
		}

		if (indexForReplace !== null && countOfLastNumber <= 2) {
			nums[indexForReplace] = currentNumber;
			indexForReplace++;
		}
	}

	return indexForReplace !== null ? indexForReplace : nums.length;
}
