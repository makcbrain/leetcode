class MinHeap {
	#heap = [];
	#getValue;

	constructor(getValueForElement = (value) => value) {
		this.#getValue = getValueForElement;
	}

	size() {
		return this.#heap.length;
	}

	getParentIndex(i) {
		return Math.floor((i - 1) / 2);
	}

	getLeftChildIndex(i) {
		return 2 * i + 1;
	}

	getRightChildIndex(i) {
		return 2 * i + 2;
	}

	#swap(i, j) {
		[this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
	}

	get() {
		if (this.#heap.length === 0) {
			return null;
		}

		if (this.#heap.length === 1) {
			return this.#heap.pop();
		}

		const value = this.#heap[0];
		this.#heap[0] = this.#heap.pop();
		this.heapifyDown();

		return value;
	}

	add(value) {
		this.#heap.push(value);
		this.heapifyUp();
	}

	heapifyDown() {
		let index = 0;

		while (this.getLeftChildIndex(index) < this.#heap.length) {
			let smallerChildIndex = this.getLeftChildIndex(index);
			const rightChildIndex = this.getRightChildIndex(index);

			if (
				rightChildIndex < this.#heap.length &&
				this.#getValue(this.#heap[rightChildIndex]) < this.#getValue(this.#heap[smallerChildIndex])
			) {
				smallerChildIndex = rightChildIndex;
			}

			if (this.#getValue(this.#heap[index]) < this.#getValue(this.#heap[smallerChildIndex])) {
				break;
			}

			this.#swap(index, smallerChildIndex);
			index = smallerChildIndex;
		}
	}

	heapifyUp() {
		let index = this.#heap.length - 1;

		while (index > 0) {
			const parentIndex = this.getParentIndex(index);

			if (this.#getValue(this.#heap[parentIndex]) < this.#getValue(this.#heap[index])) {
				break;
			}

			this.#swap(parentIndex, index);
			index = parentIndex;
		}
	}

	print() {
		console.log(this.#heap);
	}
}

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
	const resultRootNode = new ListNode();
	let currentNode = resultRootNode;
	const heap = new MinHeap((node) => node.val);

	for (const list of lists) {
		if (list) {
			heap.add(list);
		}
	}

	while (heap.size()) {
		const minNode = heap.get();
		const nextNode = new ListNode(minNode.val);
		currentNode.next = nextNode;

		currentNode = nextNode;

		if (minNode.next) {
			heap.add(minNode.next);
		}
	}

	return resultRootNode.next;
};
