class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
	if (k <= 1) {
		return head;
	}

	const dummyHead = new ListNode(null, head);

	let node = head;
	let prev = dummyHead;
	let lastNode = dummyHead;
	let tail = null;
	let next = null;
	let num = 0;

	while (node) {
		next = node.next;

		if (num % k === 0) {
			if (tail) {
				lastNode = tail;
			}

			tail = node;
		} else {
			node.next = prev;
		}

		if ((num + 1) % k === 0) {
			lastNode.next = node;
			tail.next = next;
		}

		prev = node;
		node = next;
		num++;
	}

	const backNum = num % k;

	if (backNum > 1) {
		node = prev;
		prev = node.next;
		node.next = null;

		for (let i = backNum; i > 1; i--) {
			next = prev.next;
			prev.next = node;
			node = prev;
			prev = next;
		}
	}

	return dummyHead.next;
};
