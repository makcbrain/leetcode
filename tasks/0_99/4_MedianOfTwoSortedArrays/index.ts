function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const resultArr: number[] = [];

	let i = 0;
	const iMax = nums1.length - 1;
	let j = 0;
	const jMax = nums2.length - 1;

	while (i <= iMax && j <= jMax) {
		if (nums1[i] <= nums2[j]) {
			resultArr.push(nums1[i]);
			i++;
		} else {
			resultArr.push(nums2[j]);
			j++;
		}
	}

	for (; i <= iMax; i++) {
		resultArr.push(nums1[i]);
	}

	for (; j <= jMax; j++) {
		resultArr.push(nums2[j]);
	}

	if (resultArr.length % 2) {
		return resultArr[Math.floor(resultArr.length / 2)];
	} else {
		const maxIndex = resultArr.length / 2;
		return (resultArr[maxIndex] + resultArr[maxIndex - 1]) / 2;
	}
}
