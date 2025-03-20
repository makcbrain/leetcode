/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
	let iMin = 0;
	let iMax = matrix.length - 1;
	let jMin = 0;
	let jMax = matrix[0].length - 1;
	const result = [];

	while (iMin <= iMax && jMin <= jMax) {
		// top left to right
		for (let j = jMin; j <= jMax; j++) {
			result.push(matrix[iMin][j]);
		}
		iMin++;

		// left top to down
		for (let i = iMin; i <= iMax; i++) {
			result.push(matrix[i][jMax]);
		}
		jMax--;

		// bottom right to left
		for (let j = jMax; iMax >= iMin && j >= jMin; j--) {
			result.push(matrix[iMax][j]);
		}
		iMax--;

		// left bottom to top
		for (let i = iMax; jMax >= jMin && i >= iMin; i--) {
			result.push(matrix[i][jMin]);
		}
		jMin++;
	}

	return result;
};
