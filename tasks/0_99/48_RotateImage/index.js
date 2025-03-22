/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
	const n = matrix.length;

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	const maxJ = Math.floor(n / 2);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < maxJ; j++) {
			const oppositeJ = n - 1 - j;
			const temp = matrix[i][j];
			matrix[i][j] = matrix[i][oppositeJ];
			matrix[i][oppositeJ] = temp;
		}
	}

	return matrix;
};
