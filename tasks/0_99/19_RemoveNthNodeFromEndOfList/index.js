class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
	const dummy = new ListNode(null, head);
	let slow = dummy;
	let fast = dummy;

	for (let i = 0; i <= n; i++) {
		fast = fast.next;
	}

	while (fast !== null) {
		slow = slow.next;
		fast = fast.next;
	}

	slow.next = slow.next.next;

	return dummy.next;
};
