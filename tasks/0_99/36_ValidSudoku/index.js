const isValid = (arr) => {
	const numbers = arr.filter((value) => value !== '.');

	return new Set(numbers).size === numbers.length;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
	const areas = new Map();

	for (let i = 0; i < board.length; i++) {
		// rows
		if (!isValid(board[i])) {
			return false;
		}

		const column = [];

		for (let j = 0; j < board.length; j++) {
			column.push(board[j][i]);

			const keyArea = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;

			if (!areas.has(keyArea)) {
				areas.set(keyArea, []);
			}

			areas.get(keyArea).push(board[i][j]);
		}

		if (!isValid(column)) {
			return false;
		}
	}

	for (const [key, value] of areas) {
		if (!isValid(value)) {
			return false;
		}
	}

	return true;
};
