class Node {
	constructor(val, next, random) {
		this.val = val;
		this.next = next;
		this.random = random;
	}
}

const copyNode = (node) => {
	if (node === null) {
		return null;
	}

	return new Node(node.value, copyNode(node.next), copyNode(node.random));
};

const copyRandomList = (head) => copyNode(head);
