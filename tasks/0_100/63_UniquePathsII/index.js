class ListNode {
	value;
	next;

	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Queue {
	#head;
	#tail;

	constructor() {
		this.#head = null;
		this.#tail = null;
	}

	add(value) {
		const node = new ListNode(value);

		if (!this.#head) {
			this.#head = node;
		}

		if (this.#tail) {
			this.#tail.next = node;
		}

		this.#tail = node;
	}

	get() {
		const node = this.#head;

		if (!node) {
			return null;
		}

		this.#head = this.#head.next;

		if (node === this.#tail) {
			this.#tail = null;
		}

		return node.value;
	}
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const uniquePathsWithObstacles = (grid) => {
	let numberOfPaths = 1;
	const rows = grid.length;
	const cols = grid[0].length;
	const rowEnd = rows - 1;
	const colEnd = cols - 1;
	const queue = new Queue();

	queue.add([0, 0]);

	let position;

	while ((position = queue.get())) {
		let newPaths = -1;
		const [row, col] = position;

		if (row === rowEnd && col === colEnd) {
			continue;
		}

		const downPosition = [row + 1, col];

		if (downPosition[0] < rows && grid[downPosition[0]][downPosition[1]] === 0) {
			newPaths++;
			queue.add(downPosition);
		}

		const rightPosition = [row, col + 1];

		if (rightPosition[1] < cols && grid[rightPosition[0]][rightPosition[1]] === 0) {
			newPaths++;
			queue.add(rightPosition);
		}

		numberOfPaths += newPaths;
	}

	return numberOfPaths;
};
