class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
	if (left === right) {
		return head;
	}

	const dummyHead = new ListNode(null, head);
	let prev = dummyHead;
	let node = head;
	let num = 1;

	while (num < left && node) {
		prev = node;
		node = node.next;
		num++;
	}

	const tail = node;
	const lastLeftNode = prev;

	let next = null;

	while (num <= right && node) {
		next = node.next;
		node.next = prev;

		prev = node;
		node = next;
		num++;
	}

	tail.next = node;
	lastLeftNode.next = prev;

	return dummyHead.next;
};
