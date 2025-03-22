/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
	const iMax = matrix.length - 1;
	const jMax = matrix[0].length - 1;

	const setNull = (iPoint, jPoint) => {
		for (let i = 0; i <= iMax; i++) {
			if (matrix[i][jPoint] !== 0) {
				matrix[i][jPoint] = null;
			}
		}

		for (let j = 0; j <= jMax; j++) {
			if (matrix[iPoint][j] !== 0) {
				matrix[iPoint][j] = null;
			}
		}
	};

	for (let i = 0; i <= iMax; i++) {
		for (let j = 0; j <= jMax; j++) {
			if (matrix[i][j] === 0) {
				setNull(i, j);
			}
		}
	}

	for (let i = 0; i <= iMax; i++) {
		for (let j = 0; j <= jMax; j++) {
			if (matrix[i][j] === null) {
				matrix[i][j] = 0;
			}
		}
	}

	return matrix;
};
