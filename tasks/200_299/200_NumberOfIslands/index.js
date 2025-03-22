const getNodeName = (row, column) => {
	return `${row},${column}`;
};

const travarseGraph = (startNodeName, graph, visitedNodes) => {
	visitedNodes.add(startNodeName);
	const targetNodes = graph.get(startNodeName);

	if (!Array.isArray(targetNodes)) {
		return;
	}

	for (targetNodeName of targetNodes) {
		if (visitedNodes.has(targetNodeName)) {
			continue;
		}

		travarseGraph(targetNodeName, graph, visitedNodes);
	}
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
	const graph = new Map();
	const lastRowNumber = grid.length - 1;
	const lastColumnNumber = grid[0].length - 1;

	for (let row = 0; row < grid.length; row++) {
		for (let column = 0; column < grid[row].length; column++) {
			const currentValue = grid[row][column];

			if (currentValue === '0') {
				continue;
			}

			const currentNodeName = getNodeName(row, column);
			let targetNodesArray = graph.get(currentNodeName);

			if (!targetNodesArray) {
				targetNodesArray = [];
				graph.set(currentNodeName, targetNodesArray);
			}

			const nextColumn = column + 1;

			if (nextColumn <= lastColumnNumber) {
				const rightValue = grid[row][nextColumn];

				if (rightValue === '1') {
					targetNodesArray.push(getNodeName(row, nextColumn));
				}
			}

			const prevColumn = column - 1;

			if (prevColumn >= 0) {
				const leftValue = grid[row][prevColumn];

				if (leftValue === '1') {
					targetNodesArray.push(getNodeName(row, prevColumn));
				}
			}

			const nextRow = row + 1;

			if (nextRow <= lastRowNumber) {
				const bottomValue = grid[nextRow][column];

				if (bottomValue === '1') {
					targetNodesArray.push(getNodeName(nextRow, column));
				}
			}

			const prevRow = row - 1;

			if (prevRow >= 0) {
				const topValue = grid[prevRow][column];

				if (topValue === '1') {
					targetNodesArray.push(getNodeName(prevRow, column));
				}
			}
		}
	}

	let islands = 0;
	const visitedNodes = new Set();

	for (const sourceNodeName of graph.keys()) {
		if (!visitedNodes.has(sourceNodeName)) {
			islands++;
		}

		travarseGraph(sourceNodeName, graph, visitedNodes);
	}

	return islands;
};
