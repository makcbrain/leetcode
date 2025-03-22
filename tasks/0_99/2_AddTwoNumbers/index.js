/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
	const head = new ListNode();
	let currentNode = head;
	let carry = 0;

	while (l1 || l2 || carry) {
		const num1 = l1?.val ?? 0;
		const num2 = l2?.val ?? 0;

		let numRes = num1 + num2 + carry;

		if (numRes > 9) {
			numRes = numRes - 10;
			carry = 1;
		} else {
			carry = 0;
		}

		const newNode = new ListNode(numRes);
		currentNode.next = newNode;
		currentNode = newNode;

		if (l1) {
			l1 = l1.next;
		}

		if (l2) {
			l2 = l2.next;
		}
	}

	return head.next;
};

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
