import { Node } from './index.js';

// [[7,null],[13,0],[11,4],[10,2],[1,0]]
export const createLinkedList = (infoArr) => {
	if (!infoArr.length) {
		return null;
	}

	const nodes = new Map();

	const getNode = (index) => {
		const node = nodes.get(index);

		if (node) {
			return node;
		}

		const info = infoArr[index];

		if (!info) {
			return null;
		}

		const newNode = new Node(info[0]);
		nodes.set(index, newNode);

		return newNode;
	};

	const linkNode = (index) => {
		const info = infoArr[index];
		const node = getNode(index);
		const nextNode = getNode(index + 1);
		const randomNode = getNode(info[1]);

		node.next = nextNode;
		node.random = randomNode;

		return node;
	};

	const head = linkNode(0);

	for (let i = 0; i < infoArr.length; i++) {
		linkNode(i);
	}

	return head;
};
