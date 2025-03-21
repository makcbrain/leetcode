/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function* generateInOrder(root) {
	const stack = [];
	let node = root;

	while (node || stack.length) {
		while (node) {
			stack.push(node);
			node = node.left;
		}

		node = stack.pop();

		yield node.val;

		node = node.right;
	}
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
	const generator = generateInOrder(root);
	let { value: prevValue } = generator.next();
	let minimum = Infinity;

	for (const value of generator) {
		minimum = Math.min(minimum, value - prevValue);
		prevValue = value;
	}

	return minimum;
};
