/**
 * @param {number} n - max number
 * @param {number} k - number of elements in each array
 * @return {number[][]}
 */
export const combine = (n, k) => {
	const result = [];

	const numbers = Array(n)
		.fill(0)
		.map((val, index) => index + 1);

	const backtrack = (arr, i) => {
		if (typeof numbers[i] === 'undefined') {
			return;
		}

		arr.push(numbers[i]);

		if (arr.length === k) {
			result.push([...arr]);
		} else {
			backtrack(arr, i + 1);
		}

		arr.pop();

		backtrack(arr, i + 1);
	};

	backtrack([], 0);

	return result;
};
