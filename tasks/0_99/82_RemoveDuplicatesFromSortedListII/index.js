class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
	if (!head || !head.next) {
		return head;
	}

	const dummy = new ListNode(0, head);

	let prevNode = dummy;
	let node = head;

	while (node) {
		if (node.next && node.next.val === node.val) {
			let nextNode = node.next.next;

			while (nextNode && nextNode.val === node.val) {
				nextNode = nextNode.next;
			}

			prevNode.next = nextNode;
			node = nextNode;
			continue;
		}

		prevNode = node;
		node = node.next;
	}

	return dummy.next;
};
