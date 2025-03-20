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

		if (this.#head) {
			this.#head = this.#head.next;
		}

		if (node === this.#tail) {
			this.#tail = null;
		}

		return node;
	}
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsWithObstacles = (grid) => {};
