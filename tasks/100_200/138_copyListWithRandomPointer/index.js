export class Node {
	constructor(val, next = null, random = null) {
		this.val = val;
		this.next = next;
		this.random = random;
	}
}

export const copyRandomList = (head) => {
	if (!head) {
		return null;
	}

	const nodes = new Map();

	const getNode = (currNode) => {
		if (!currNode) {
			return null;
		}

		const node = nodes.get(currNode);

		if (node) {
			return node;
		}

		const newNode = new Node(currNode.val);
		nodes.set(currNode, newNode);

		return newNode;
	};

	const linkNode = (currentNode) => {
		const node = getNode(currentNode);

		node.next = getNode(currentNode.next);
		node.random = getNode(currentNode.random);
	};

	let node = head;

	while (node) {
		linkNode(node);
		node = node.next;
	}

	return getNode(head);
};
