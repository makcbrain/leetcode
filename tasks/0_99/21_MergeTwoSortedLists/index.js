/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
	if (!list1 && !list2) {
		return null;
	} else if (!list1) {
		return list2;
	} else if (!list2) {
		return list1;
	}

	let head;
	let current;

	if (list1.val <= list2.val) {
		head = list1;
		list1 = list1.next;
	} else {
		head = list2;
		list2 = list2.next;
	}

	current = head;

	while (true) {
		if (!list1 && !list2) {
			return head;
		} else if (!list1) {
			current.next = list2;
			return head;
		} else if (!list2) {
			current.next = list1;
			return head;
		}

		if (list1.val <= list2.val) {
			current.next = list1;
			current = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			current = list2;
			list2 = list2.next;
		}
	}
};
