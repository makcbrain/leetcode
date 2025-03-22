/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
	if (!head) {
		return false;
	}

	let slow = head;
	let fast = head;

	while (slow.next && fast.next) {
		slow = slow.next;
		fast = fast.next;

		if (!fast.next) {
			return false;
		}

		fast = fast.next;

		if (fast === slow) {
			return true;
		}
	}

	return false;
};
