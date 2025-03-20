import { expect, it } from 'bun:test';
import { uniquePathsWithObstacles } from './index.js';

it('should return 2', () => {
	expect(
		uniquePathsWithObstacles([
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0],
		]),
	).toBe(2);
});

it('should return 1', () => {
	expect(
		uniquePathsWithObstacles([
			[0, 1],
			[0, 0],
		]),
	).toBe(1);
});
