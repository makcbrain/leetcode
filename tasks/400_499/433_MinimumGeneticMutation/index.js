class ListNode {
	value;
	next;

	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Queue1 {
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

	isNotEmpty() {
		return this.#head !== null;
	}
}

const hasOneMutation = (genA, genB) => {
	let diff = 0;

	for (let i = 0; i < genA.length; i++) {
		if (genA[i] !== genB[i]) {
			diff++;
		}

		if (diff > 1) {
			return false;
		}
	}

	return diff === 1;
};

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = (startGene, endGene, bank) => {
	const endGeneInBank = bank.find((gen) => gen === endGene);

	if (!endGeneInBank) {
		return -1;
	}

	const visited = new Set();
	const queue = new Queue1();

	visited.add(startGene);
	queue.add([startGene, 0]);

	while (queue.isNotEmpty()) {
		const [gen, numberOfMutation] = queue.get();
		console.log(gen, numberOfMutation);

		if (gen === endGene) {
			return numberOfMutation;
		}

		for (const targetGen of bank) {
			if (visited.has(targetGen) || !hasOneMutation(gen, targetGen)) {
				continue;
			}
			visited.add(targetGen);
			queue.add([targetGen, numberOfMutation + 1]);
		}
	}

	return -1;
};
