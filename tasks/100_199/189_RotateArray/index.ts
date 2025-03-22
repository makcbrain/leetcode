/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
	const n = k % nums.length;
	const end = nums.splice(nums.length - n, n);
	nums.unshift(...end);
}
