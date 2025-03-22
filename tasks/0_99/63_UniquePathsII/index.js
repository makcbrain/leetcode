/**
 * @param {number[][]} grid
 * @return {number}
 */
export const uniquePathsWithObstacles = (grid) => {
	const rows = grid.length;
	const cols = grid[0].length;

	if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) {
		return 0;
	}

	const matrix = Array(rows)
		.fill()
		.map(() => Array(cols).fill(0));
	matrix[0][0] = 1;

	for (let i = 1; i < cols; i++) {
		if (grid[0][i] === 0) {
			matrix[0][i] = matrix[0][i - 1];
		}
	}

	for (let i = 1; i < rows; i++) {
		if (grid[i][0] === 0) {
			matrix[i][0] = matrix[i - 1][0];
		}
	}

	for (let i = 1; i < rows; i++) {
		for (let j = 1; j < cols; j++) {
			if (grid[i][j] === 0) {
				matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
			}
		}
	}

	return matrix[rows - 1][cols - 1];
};
