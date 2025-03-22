const convert = (string, numRows) => {
	if (numRows < 2) {
		return string;
	}

	const matrix = new Array(numRows).fill(null).map(() => []);
	let i = 0;
	let j = 0;

	function* generateZigZag() {
		const maxIteration = numRows - 1;

		while (true) {
			for (let firstCycle = 0; firstCycle < maxIteration; firstCycle++) {
				yield i++;
			}

			for (let secondCycle = 0; secondCycle < maxIteration; secondCycle++) {
				i--;
				j++;
				yield;
			}
		}
	}

	const gen = generateZigZag();

	for (const symbol of string) {
		matrix[i][j] = symbol;
		gen.next();
	}

	return matrix.map((arr) => arr.join('')).join('');
};
