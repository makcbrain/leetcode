/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
	let index1 = m - 1;
	let index2 = n - 1;
	let numIndex = m + n - 1;

	while (index1 >= 0 || index2 >= 0) {
		if (index1 >= 0 && index2 >= 0) {
			if (nums1[index1] > nums2[index2]) {
				nums1[numIndex] = nums1[index1];
				index1--;
			} else {
				nums1[numIndex] = nums2[index2];
				index2--;
			}
		} else if (index1 >= 0) {
			nums1[numIndex] = nums1[index1];
			index1--;
		} else {
			nums1[numIndex] = nums2[index2];
			index2--;
		}

		numIndex--;
	}

	return nums1;
};
