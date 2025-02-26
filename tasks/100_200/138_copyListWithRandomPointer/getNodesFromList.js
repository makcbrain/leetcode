export const getNodesFromList = (linkedListHead) => {
	const arr = [];
	let node = linkedListHead;

	while (node) {
		arr.push(node);
		node = node.next;
	}

	return arr;
};
