/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
	let res = 0;

	const colSet = new Set();
	const leftDiagSet = new Set(); // row - col
	const rightDiagSet = new Set(); // row + col

	const placeQueen = (row) => {
		if (row === n) {
			res++;
		}

		for (let col = 0; col < n; col++) {
			const leftDiag = row - col;
			const rightDiag = row + col;

			if (colSet.has(col) || leftDiagSet.has(leftDiag) || rightDiagSet.has(rightDiag)) {
				continue;
			}

			colSet.add(col);
			leftDiagSet.add(leftDiag);
			rightDiagSet.add(rightDiag);

			placeQueen(row + 1);

			colSet.delete(col);
			leftDiagSet.delete(leftDiag);
			rightDiagSet.delete(rightDiag);
		}
	};

	placeQueen(0);

	return res;
};
