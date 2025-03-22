/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * States:
 * 0 - dead
 * 1 - alive
 * 2 - was dead, become alive
 * 3 - was alive, become dead
 */
const gameOfLife = (board) => {
	const maxI = board.length - 1;
	const maxJ = board[0].length - 1;

	function* genNeighbours(iPoint, jPoint) {
		const startI = Math.max(iPoint - 1, 0);
		const endI = Math.min(iPoint + 1, maxI);
		const startJ = Math.max(jPoint - 1, 0);
		const endJ = Math.min(jPoint + 1, maxJ);

		for (let i = startI; i <= endI; i++) {
			for (let j = startJ; j <= endJ; j++) {
				if (i !== iPoint || j !== jPoint) {
					yield board[i][j];
				}
			}
		}
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			let aliveNeighbours = 0;
			let deadNeighbours = 0;

			const gen = genNeighbours(i, j);

			for (const value of gen) {
				if (value === 1 || value === 3) {
					aliveNeighbours++;
				} else {
					deadNeighbours++;
				}
			}

			if (board[i][j] === 1) {
				if (aliveNeighbours < 2) {
					board[i][j] = 3;
				} else if (aliveNeighbours > 3) {
					board[i][j] = 3;
				}
			} else {
				if (aliveNeighbours === 3) {
					board[i][j] = 2;
				}
			}
		}
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 2) {
				board[i][j] = 1;
			} else if (board[i][j] === 3) {
				board[i][j] = 0;
			}
		}
	}

	return board;
};
