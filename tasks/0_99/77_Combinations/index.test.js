import { expect, it } from 'bun:test';
import { combine } from './index.js';

it('n = 4, k = 2', () => {
	expect(combine(4, 2)).toEqual([
		[1, 2],
		[1, 3],
		[1, 4],
		[2, 3],
		[2, 4],
		[3, 4],
	]);
});

it('n = 4, k = 3', () => {
	expect(combine(4, 3)).toEqual([
		[1, 2, 3],
		[1, 2, 4],
		[1, 3, 4],
		[2, 3, 4],
	]);
});

it('n = 5, k = 3', () => {
	expect(combine(5, 3)).toEqual([
		[1, 2, 3],
		[1, 2, 4],
		[1, 2, 5],
		[1, 3, 4],
		[1, 3, 5],
		[1, 4, 5],
		[2, 3, 4],
		[2, 3, 5],
		[2, 4, 5],
		[3, 4, 5],
	]);
});
