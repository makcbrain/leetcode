import { expect, test } from 'bun:test';
import { createLinkedList } from './createLinkedList.js';
import { getNodesFromList } from './getNodesFromList.js';

test('[[7,null], [13,0], [11,4], [10,2], [1,0]]', () => {
	const head = createLinkedList([
		[7, null],
		[13, 0],
		[11, 4],
		[10, 2],
		[1, 0],
	]);
	const arr = getNodesFromList(head);

	expect(arr[0].val).toBe(7);
	expect(arr[0].next).toBe(arr[1]);
	expect(arr[0].random).toBe(null);

	expect(arr[1].val).toBe(13);
	expect(arr[1].next).toBe(arr[2]);
	expect(arr[1].random).toBe(arr[0]);

	expect(arr[2].val).toBe(11);
	expect(arr[2].next).toBe(arr[3]);
	expect(arr[2].random).toBe(arr[4]);

	expect(arr[3].val).toBe(10);
	expect(arr[3].next).toBe(arr[4]);
	expect(arr[3].random).toBe(arr[2]);

	expect(arr[4].val).toBe(1);
	expect(arr[4].next).toBe(null);
	expect(arr[4].random).toBe(arr[0]);
});
